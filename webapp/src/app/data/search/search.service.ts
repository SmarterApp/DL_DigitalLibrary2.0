import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { DataService } from '../data.service';
import { ResourceResult } from './resource-result.model';
import { SearchRequestModel } from './search-request.model';
import { coalesce } from 'src/app/common/utils';
import { ResourceService } from '../resource/resource.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private dataService: DataService) { }

  post(request: SearchRequestModel): Observable<ResourceResult[]> {
    const apiRequest = this.mapToApiRequest(request);
    return this.dataService.post('/search', apiRequest)
      .pipe(map(x => this.mapToResourceResultModels(x)));
  }

  mapToApiRequest(model: SearchRequestModel):any {
    return {
      query: model.query,
      // TODO: Map filters to api model
    };
  }

  mapToResourceResultModels(apiModels: any[]): ResourceResult[] {
    return coalesce(apiModels, []).map(apiModel => <ResourceResult>{
      id: apiModel.id,
      title: apiModel.title,
      resourceType: ResourceService.ApiResourceTypeMap.get(apiModel.resourceType),
      image: apiModel.image,
      description: apiModel.altBody,
      subjects: apiModel.subjects,
      grades: apiModel.grades,
      claims: apiModel.claims,
      targets: apiModel.targets
    });
  }
}
