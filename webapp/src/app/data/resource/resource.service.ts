import { Injectable } from '@angular/core';
import { ResourceModel } from './model/resource.model';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResourceHeaderModel, Alignment } from './model/resource-header.model';
import { OverviewModel, ResourceMaterial } from './model/overview.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private dataService: DataService) { }

  get(id: number): Observable<ResourceModel> {
    return this.dataService
      .get(`/resource/${id}`)
      .pipe(map(apiModel => this.mapToResourceModel(apiModel)));
  }

  private mapToResourceModel(apiResource: any): ResourceModel {
    return <ResourceModel> {
      header: this.mapToResourceHeaderModel(apiResource),
      overview: this.mapToOverview(apiResource)
    };
  }

  private mapToResourceHeaderModel(apiResource: any): ResourceHeaderModel {
    return <ResourceHeaderModel> {
      resourceId: apiResource.id,
      title: apiResource.title,
      subjects: apiResource.subjects,
      grades: apiResource.grades,
      image: apiResource.resourceThumbnail,
      author: apiResource.author,
      lastModified: new Date(apiResource.changed),
      learningGoal: apiResource.learningGoals,
      claims: apiResource.educationalAlignments.map(ea => <Alignment>{
        title: ea.title,
        shortName: ea.shortName
      }),
      targets: apiResource.targetAlignments.map(ta => <Alignment>{
        title: ta.title,
        shortName: ta.shortName
      }),

      // UNKNOWN
      connectionsPlaylist: apiResource.connectionsPlaylist,

      // UNKNOWN
      // claim: string;

      // MAYBE, but this is an array?
      // /api/v1/resource.targetsAlignmentShortnames
      // target: string;

      // MAYBE, but this is NOT an array?
      // /api/v1/resource.connectionToCcss
      standards: apiResource.standards

      // UKNOWN
      // favorited: boolean;
    };
  }

  mapToOverview(apiModel: any): OverviewModel {
    return <OverviewModel> {
      // MAYBE
      // /api/v1/resource.altBody 
      description: apiModel.altBody,

      // UNKNOWN
      resourceMaterials: apiModel.attachments.map(a => <ResourceMaterial>{
        title: a.name,
        url: a.url,
        description: a.description
      }),

      // UNKNOWN
      differentiation: apiModel.differentiation,

      // /api/v1/resource.successCriteria
      successCriteria: apiModel.successCriteria
    }
  }
}
