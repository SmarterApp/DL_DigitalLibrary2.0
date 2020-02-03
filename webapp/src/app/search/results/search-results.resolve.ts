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

    const searchParams = this.service.paramsToRequestModel(route.params);
    // if we have no search params, don't do an expensive search over the entire index.
    if (!searchParams) {
      return this.service.getDefaultFilters().pipe(
        map(filters => ({ filters, results: [] })));
    } else {
      return this.service.fetchAllResults(searchParams);
    }
  }

}
