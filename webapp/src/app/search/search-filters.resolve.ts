import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SearchService} from 'src/app/data/search/search.service';
import {SearchFilters, emptyFilters} from '../data/search/search-filters.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchFiltersResolve implements Resolve<SearchFilters> {
  constructor(private service: SearchService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SearchFilters | Observable<SearchFilters> | Promise<SearchFilters> {
    // if we have no search params, make an elasticsearch api call with blank search text
    // the ideal solution will be creating a new api that return all the search filter values
    // and then store in a cache Map with key being the api url and value being the api response
    const searchParams = this.service.paramsToRequestModel(route.params, true);
    return this.service.fetchAllResults(searchParams).pipe(
      map(searchParams => searchParams.filters));
  }
}
