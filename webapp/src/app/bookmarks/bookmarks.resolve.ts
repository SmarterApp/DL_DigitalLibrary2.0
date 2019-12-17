import { ResourceSummary } from '../data/resource/model/summary.model';
import { ResourceType } from '../data/resource/model/resource-type.enum';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceService } from '../data/resource/resource.service';
import { mockResourceSummaries } from '../data/mock-data';

@Injectable({
    providedIn: 'root'
})
export class BookmarksResolve implements Resolve<ResourceSummary[]> {
    constructor(private service: ResourceService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
          ResourceSummary[] | Observable<ResourceSummary[]> | Promise<ResourceSummary[]> {
    return mockResourceSummaries;
  }
}
