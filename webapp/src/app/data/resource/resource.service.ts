import { Injectable } from '@angular/core';
import { ResourceModel } from './model/resource.model';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResourceHeaderModel } from './model/resource-header.model';

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
      header: this.mapToResourceHeaderModel(apiResource)
    };
  }

  private mapToResourceHeaderModel(apiResource: any): ResourceHeaderModel {
    return <ResourceHeaderModel> {
      resourceId: apiResource.id,
      title: apiResource.title,
      subjects: apiResource.subjects,
      grades: apiResource.grades,
      image: apiResource.resourceThumbnailImage,
      author: apiResource.author,
      lastModified: new Date(apiResource.changed),
      learningGoal: apiResource.learningGoals

      // UNKNOWN
      // connectionsPlaylist: string[];

      // UNKNOWN
      // claim: string;

      // MAYBE, but this is an array?
      // /api/v1/resource.targetsAlignmentShortnames
      // target: string;

      // MAYBE, but this is NOT an array?
      // /api/v1/resource.connectionToCcss
      // standards: string[];   

      // UKNOWN
      // favorited: boolean;
    };
  }
}
