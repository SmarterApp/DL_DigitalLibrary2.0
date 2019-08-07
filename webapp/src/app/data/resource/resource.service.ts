import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { coalesce } from 'src/app/common/utils';
import { DataService } from '../data.service';
import { DifferentiationModel } from './model/differentiation.model';
import { FormativeModel } from './model/formative.model';
import { OverviewModel, ResourceMaterial } from './model/overview.model';
import { Alignment, Playlist, ResourceDetailsModel } from './model/resource-details.model';
import { ResourceStepModel } from './model/resource-step.model';
import { ResourceStrategyModel } from './model/resource-strategy.model';
import { ResourceType } from './model/resource-type.enum';
import { ResourceModel } from './model/resource.model';
import { AttachmentModel, FileType } from './model/attachment.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  // It's unclear what the potential values 
  // the API will return here.
  readonly apiResourceTypeMap: Map<string, ResourceType> = new Map([
    ['Instructional and Professional Learning', ResourceType.Instructional ]
  ]);

  // TODO: Define how assessment types are defined.  How will this be represented?
  // TODO: Define all assessment type icons.
  readonly assessmentTypeToIconMap: Map<number, string> = new Map([
    [ 1, 'assessment-6-7-number-system' ]
  ]);

  readonly fileExtensionToFileTypeMap: Map<string, FileType> = new Map([
    [ '.docx', FileType.Word ],
    [ '.pdf', FileType.Pdf ]
  ]);

  constructor(private dataService: DataService) { }

  get(id: number): Observable<ResourceModel> {
    return this.dataService
      .get(`/resource/${id}`)
      .pipe(map(apiModel => this.mapToResourceModel(apiModel)));
  }

  private mapToResourceModel(apiResource: any): ResourceModel {
    const resourceType = this.apiResourceTypeMap.get(apiResource.resourceType);

    if(resourceType == null) {
      throw Error('Unexpected resourceType for: ' + apiResource.resourceType);
    }

    return <ResourceModel> {
      resourceId: apiResource.id,
      resourceType: resourceType,
      details: this.mapToResourceDetailsModel(apiResource),
      overview: this.mapToOverview(apiResource),
      steps: this.mapToSteps(coalesce(apiResource.steps, [])),
      attachments: this.mapToAttachments(coalesce(apiResource.attachments, [])),
      differentiation: this.mapToDifferentiation(apiResource),
      formative: this.mapToFormative(apiResource)
    };
  }

  private mapToResourceDetailsModel(apiResource: any): ResourceDetailsModel {
    return <ResourceDetailsModel> {
      title: apiResource.title,
      favorite: apiResource.favorite,
      subjects: coalesce(apiResource.subjects, []),
      grades: coalesce(apiResource.grades, []),
      image: apiResource.resourceThumbnail,
      author: apiResource.author,
      authorOrganization: apiResource.publisher,
      lastModified: new Date(apiResource.changed),
      
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
      standards: coalesce(apiResource.standards, [])
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
      successCriteria: apiModel.successCriteria
    }
  }

  mapToSteps(apiSteps: any[]):ResourceStepModel[] {
    return apiSteps.map(s => <ResourceStepModel>{
      stepNumber: s.number,
      title: s.title,
      content: s.content
    }).sort(x => x.stepNumber);
  }

  mapToAttachments(apiAttachments: any[]):AttachmentModel[] {
        return apiAttachments.map(a =>  { 
          const filename = a.url.substring(a.url.lastIndexOf('/') + 1).toLowerCase();
          const fileExtension = filename.substring(filename.lastIndexOf('.'));

          return <AttachmentModel>{
            title: a.name,
            downloadUrl: a.url,
            fileType: coalesce(this.fileExtensionToFileTypeMap.get(fileExtension), FileType.Unknown),
            filename: filename,
            fileExtension: fileExtension,
            fileSizeInKB: Math.round(a.fileSize / 1000),
            type: a.type
        };
      })
  }

  mapToDifferentiation(apiModel): DifferentiationModel {
    return {
      performanceBasedDifferentiation: apiModel.differentiation,
      accessibilityStrategies: apiModel.accessibilityStrategies.map(x => <ResourceStrategyModel>{
        title: x.title,
        moreAboutUrl: x.link,
        description: x.description
      })
    };
  }

  mapToFormative(apiModel): FormativeModel {
    return {
      howItsUsed: apiModel.connectionToFap,
      strategies: apiModel.formativeStrategies.map(x => <ResourceStrategyModel>{
        title: x.title,
        moreAboutUrl: x.link,
        description: x.description
      })
    }
  }
}
