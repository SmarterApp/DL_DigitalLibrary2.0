import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResults } from 'src/app/data/search/search-results.model';
import { SearchService } from 'src/app/data/search/search.service';

@Injectable({
    providedIn: 'root'
})
export class SearchResultsResolve implements Resolve<SearchResults> {
  constructor(private service: SearchService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): SearchResults | Observable<SearchResults> | Promise<SearchResults> {

    const isDefaultSearchFilter = Object.keys(route.params).length === 0;

    const searchParams = this.service.paramsToRequestModel(route.params, isDefaultSearchFilter);
    // if we have no search params, make an elasticsearch api call with blank search text
    // to get all the filters from the data layer
    // the ideal solution will be creating a new api that return all the search filter values
    // and then store in a cache Map with key being the api url and value being the api response
    if (isDefaultSearchFilter) {
      return this.service.fetchAllResults(searchParams)
        .pipe(map(search => ({
            results: [],
            filters: search.filters
          }
        )));
    } else {
      return this.service.fetchAllResults(searchParams);
    }
  }

}
