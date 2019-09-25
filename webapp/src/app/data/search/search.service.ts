import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { DataService } from '../data.service';
import { ResourceResult, ResourceSearchResults } from './resource-result.model';
import { SearchRequestModel } from './search-request.model';
import { coalesce } from 'src/app/common/utils';
import { ResourceService } from '../resource/resource.service';
import { Alignment } from '../resource/model/resource-details.model';
import { SearchFilters, Filter, } from './search-filters.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private dataService: DataService) { }

  getDefaultFilters(): Observable<SearchFilters> {
    return this.dataService.get('/search/filters')
      .pipe(map(x => this.mapSearchFilters(x)));
  }

  post(request: SearchRequestModel): Observable<ResourceSearchResults> {
    const apiRequest = this.mapToApiRequest(request);
    return this.dataService.post('/search', apiRequest)
      .pipe(map(x => this.mapToResourceResultModels(x)));
  }

  mapToApiRequest(model: SearchRequestModel):any {
    return {
      query: model.query,
      types: model.types,
      grades: model.grades,
      subjects: model.subjects,
      claims: model.claims
    };
  }

  private mapSearchFilters(apiFilters) {
    return <SearchFilters>{
      resourceTypes: coalesce(apiFilters.resourceTypes, []).map(x => this.mapFilter(x)),
      grades: coalesce(apiFilters.grades, []).map(x => this.mapFilter(x)),
      subjects: coalesce(apiFilters.subjects, []).map(x => this.mapFilter(x)),
      claims: coalesce(apiFilters.claims, []).map(x => this.mapFilter(x)),
      targets: coalesce(apiFilters.targets, []).map(x => this.mapFilter(x))
    };
  }

  private mapFilter(apiFilter: any): Filter {
    return { 
      title: apiFilter.title,
      code: apiFilter.code
    }
  }

  private mapToResourceResultModels(apiModel: any): ResourceSearchResults {
    return apiModel 
      ? {
        filters: this.mapSearchFilters(apiModel.filters),
        results: coalesce(apiModel.results, []).map(apiModel => <ResourceResult>{
          id: apiModel.id,
          title: apiModel.title,
          resourceType: ResourceService.ApiResourceTypeMap.get(apiModel.resourceType),
          image: apiModel.resourceThumbnail,
          description: apiModel.altBody,
          
          subjects: coalesce(apiModel.subject, []),
          grades: coalesce(apiModel.grades, []),

          claims: coalesce(apiModel.educationalAlignments, []).map(ea => <Alignment>{
            title: `${ea.shortName}: ${ea.title}`,
            shortName: ea.shortName
          }),

          targets: coalesce(apiModel.targetAlignments, []).map(ta => <Alignment>{
            title: `${ta.shortName}: ${ta.title}`,
            shortName: ta.shortName
          }),
        })
      }
      : <ResourceSearchResults>{};
  }
}
