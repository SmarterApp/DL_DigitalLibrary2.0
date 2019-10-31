import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { DataService } from '../data.service';
import { ResourceResult, ResourceSearchResults } from './resource-result.model';
import { SearchRequestModel } from './search-request.model';
import { coalesce } from 'src/app/common/utils';
import { ResourceService } from '../resource/resource.service';
import { Claim } from '../resource/model/claim.model';
import { SearchFilters, Filter, } from './search-filters.model';
import { ResourceType } from '../resource/model/resource-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private dataService: DataService) { }

  getDefaultFilters(): Observable<SearchFilters> {
    return this.dataService.get('/search/filters');
  }

  post(request: SearchRequestModel): Observable<ResourceSearchResults> {
    return this.dataService.post('/search', request);
  }
}
