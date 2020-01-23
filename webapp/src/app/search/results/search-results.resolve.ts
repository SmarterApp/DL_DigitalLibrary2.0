import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchResults } from 'src/app/data/search/search-results.model';
import { SearchService } from 'src/app/data/search/search.service';

@Injectable({
    providedIn: 'root'
})
export class SearchResultsResolve implements Resolve<SearchResults> {
    constructor(private service: SearchService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot):
            SearchResults | Observable<SearchResults> | Promise<SearchResults> {

        return this.service.fetchAllResults(this.service.paramsToRequestModel(route.params));
    }

}
