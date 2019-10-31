import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/data/search/search.service';
import { SearchFilters, emptyFilters } from '../data/search/search-filters.model';

@Injectable({
    providedIn: 'root'
})
export class SearchFiltersResolve implements Resolve<SearchFilters> {
  constructor(private service: SearchService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SearchFilters | Observable<SearchFilters> | Promise<SearchFilters> {
    return emptyFilters;
  }
}
