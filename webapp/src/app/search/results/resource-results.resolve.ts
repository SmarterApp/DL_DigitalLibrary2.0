import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceResult } from 'src/app/data/search/resource-result.model';
import { SearchRequestModel } from 'src/app/data/search/search-request.model';
import { SearchService } from 'src/app/data/search/search.service';

@Injectable({
    providedIn: 'root'
})
export class ResourceResultResolve implements Resolve<ResourceResult[]> {
    constructor(private service: SearchService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ResourceResult[] | Observable<ResourceResult[]> | Promise<ResourceResult[]> {
        const request = this.mapToRequestModel(route.params);
        return this.service.post(request);
    }

    private mapToRequestModel(params: any): SearchRequestModel {
        return {
            query: params.q,
            grades: params.grades,
            claims: params.claims,
            subjects: params.subjects,
            targets: params.targets
        };
    }
}