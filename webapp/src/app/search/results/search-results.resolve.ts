import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchResults } from 'src/app/data/search/search-results.model';
import { SearchRequestModel } from 'src/app/data/search/search-request.model';
import { SearchService } from 'src/app/data/search/search.service';
import { coalesce } from 'src/app/common/utils';
import { mockSearchFilters, mockResourceSummaries } from 'src/app/data/mock-data';

@Injectable({
    providedIn: 'root'
})
export class SearchResultsResolve implements Resolve<SearchResults> {
    constructor(private service: SearchService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot):
            SearchResults | Observable<SearchResults> | Promise<SearchResults> {

        return this.service.fetchAllResults(this.service.paramsToRequestModel(route.params));
        // return this.service.post(this.service.paramsToRequestModel(route.params));
    }

}
