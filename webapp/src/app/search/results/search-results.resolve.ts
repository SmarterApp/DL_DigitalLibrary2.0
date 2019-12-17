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

        const request = this.mapToRequestModel(route.params);
        return {
          filters: mockSearchFilters,
          results: mockResourceSummaries
        };
        // return this.service.post(request);
    }

    private mapToRequestModel(params: any): SearchRequestModel {
        return {
            query: params.q,
            types: this.splitToArray(params.resourceTypes),
            grades: this.splitToArray(params.grades),
            claims: this.splitToArray(params.claims),
            subjects: this.splitToArray(params.subjects),
            targets: this.splitToArray(params.targets),
            standards: this.splitToArray(params.standards)
        };
    }

    private splitToArray(param: string) {
        return param ? param.split(',') : [];
    }
}
