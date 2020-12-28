import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SearchResults} from 'src/app/data/search/search-results.model';
import {SearchService} from 'src/app/data/search/search.service';

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

    const searchParams = this.service.paramsToRequestModel(route.params);
    // if we have no search params, make an elasticsearch api call with blank search text
    // to get all the filters from the data layer
    if (isDefaultSearchFilter) {
      return this.service.fetchSearchResult(searchParams, true)
        .pipe(map(search => ({
          results: [],
          filters: this.service.resetSelected(search.filters)
        })));
    } else {
      return this.service.fetchSearchResult(searchParams, false);
    }
  }
}
