import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { coalesce } from 'src/app/common/utils';
import { DataService } from '../data.service';
import { AttachmentService } from './attachment.service';
import { DifferentiationModel } from './model/differentiation.model';
import { FormativeAssessmentProcess, FormativeModel } from './model/formative.model';
import { OverviewModel } from './model/overview.model';
import { Alignment, Playlist, ResourceDetailsModel } from './model/resource-details.model';
import { ResourceStepModel } from './model/resource-step.model';
import { ResourceStrategyModel } from './model/resource-strategy.model';
import { ResourceType } from './model/resource-type.enum';
import { ResourceModel } from './model/resource.model';
import { EmbedStrategyLinksService } from './embed-strategy-links.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  // It's unclear what the potential values 
  // the API will return here.
  readonly apiResourceTypeMap: Map<string, ResourceType> = new Map([
    ['Instructional and Professional Learning', ResourceType.Instructional ],
    ['Instructional', ResourceType.Instructional ],
    ['Professional Learning', ResourceType.Professional ],
    ['Accessibility Strategy', ResourceType.AccessibilityStrategy ],
    ['Formative Strategy', ResourceType.FormativeStrategy ]
  ]);

  // TODO: Define how assessment types are defined.  How will this be represented?
  // TODO: Define all assessment type icons.
  readonly assessmentTypeToIconMap: Map<number, string> = new Map([
    [ 1, 'assessment-6-7-number-system' ]
  ]);

  constructor(private dataService: DataService, 
    private embedStrategyLinkService: EmbedStrategyLinksService,
    private attachmentService: AttachmentService) { }

  get(id: number): Observable<ResourceModel> {
    let resourceModel: any;
    return this.dataService
      .get(`/resources/${id}`)
      .pipe(mergeMap(apiModel => {
        resourceModel = apiModel;
        return apiModel.documents && apiModel.documents.length > 0
          ? forkJoin(this.getAttachments(apiModel.documents))
          : of([]);
      }))
      .pipe(map(attachments => {
        const model = this.mapToResourceModel(resourceModel);
        model.attachments = coalesce(attachments, []);
        return model;
      }))
      .pipe(map(resource => this.embedStrategyLinks(resource)))
  }

  getAttachments(documents: string[]): Observable<any>[] {
    let observables = [];
    
    for(let doc of documents) {
      const regexGroups = doc.match(/\/file_documents\/([0-9]*)\/download/);
      if(regexGroups && regexGroups.length > 1){
        const id = +regexGroups[1];
        if(!isNaN(id)) {
          observables.push(this.attachmentService.get(id));
        }
      }
    }

    return observables;
  }

  private mapToResourceModel(apiResource: any): ResourceModel {
    const apiResourceType = Array.isArray(apiResource.resourceType)
      ? apiResource.resourceType[0]
      : apiResource.resourceType;
    
    const resourceType = this.apiResourceTypeMap.get(apiResourceType);

    if(resourceType == null) {
      throw Error('Unexpected resourceType for: ' + apiResource.resourceType);
    }

    return <ResourceModel> {
      resourceId: apiResource.id,
      resourceType: resourceType,
      details: this.mapToResourceDetailsModel(apiResource),
      overview: this.mapToOverview(apiResource),
      steps: this.mapToSteps(coalesce(apiResource.steps, [])),
      comments: apiResource.comments,
      differentiation: this.mapToDifferentiation(apiResource),
      formative: this.mapToFormative(apiResource),

      strategyInAction: apiResource.strategyInAction,
      instructionalUse: apiResource.instructionalUse,
      stepByStep: apiResource.stepByStep
    };
  }

  private mapToResourceDetailsModel(apiResource: any): ResourceDetailsModel {
    return <ResourceDetailsModel> {
      title: apiResource.title,
      favorite: apiResource.favorite,
      subjects: coalesce(apiResource.subject, []),
      grades: coalesce(apiResource.grade, []),
      image: apiResource.resourceThumbnail,
      author: apiResource.author,
      authorOrganization: apiResource.publisher,
      lastModified: new Date(apiResource.updated),
      
      claims: coalesce(apiResource.educationalAlignments, []).map(ea => <Alignment>{
        title: `${ea.shortName}: ${ea.title}`,
        shortName: ea.shortName
      }),

      targets: coalesce(apiResource.targetAlignments, []).map(ta => <Alignment>{
        title: `${ta.shortName}: ${ta.title}`,
        shortName: ta.shortName
      }),

      relatedPlaylists: coalesce(apiResource.connectionsPlaylist, []).map(p => <Playlist>{
        title: p.title,
        numberOfResources: p.numberOfResources,
        assessmentType: p.assessmentType,
        assessmentTypeIcon: this.assessmentTypeToIconMap.get(p.assessmentType)
      }),
      // MAYBE, but this is NOT an array?
      // /api/v1/resource.connectionToCcss
      standards: coalesce(apiResource.standards, []),
      category: apiResource.category
    };
  }

  mapToOverview(apiModel: any): OverviewModel {
    return <OverviewModel> {
      // MAYBE
      // /api/v1/resource.altBody 
      description: apiModel.altBody,

      // /api/v1/resource.learningGoals
      learningGoal: apiModel.learningGoals,

      // /api/v1/resource.successCriteria
      successCriteria: apiModel.successCriteria,

      studentBenefits: apiModel.studentBenefits,

      suggestedMaterials: apiModel.suggestedMaterials
    }
  }

  mapToSteps(apiSteps: any[]):ResourceStepModel[] {
    return apiSteps.map(s => <ResourceStepModel>{
      stepNumber: s.number,
      title: s.title,
      content: s.content
    }).sort(x => x.stepNumber);
  }

  mapToDifferentiation(apiModel): DifferentiationModel {
    return {
      performanceBasedDifferentiation: apiModel.differentiation,
      accessibilityStrategies: coalesce(apiModel.accessibilityStrategies,[]).map(x => <ResourceStrategyModel>{
        title: x.title,
        moreAboutUrl: x.link,
        description: x.description
      })
    };
  }

  mapToFormative(apiModel): FormativeModel {
    const process = apiModel.formativeAssessmentProcess;

    return {
      howItsUsed: apiModel.connectionToFap,
      formativeAssessmentProcess: process
        ? <FormativeAssessmentProcess> {
          clarifyIntendedLearning: process.clarifyIntendedLearning,
          elicitEvidence: process.elicitEvidence,
          interpretEvidence: process.interpretEvidence,
          actOnEvidence: process.actOnEvidence
        } 
        : undefined, 
      strategies: coalesce(apiModel.formativeStrategies,[]).map(x => <ResourceStrategyModel>{
        title: x.title,
        moreAboutUrl: x.link,
        description: x.description
      })
    };
  }

  private embedStrategyLinks(resource: ResourceModel) {
    for(let step of resource.steps) {
      step.content = this.embedStrategyLinkService.embedStrategyLinks(step.content, resource);
    }
    
    return resource;
  }
}
