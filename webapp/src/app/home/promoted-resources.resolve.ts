import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceSummary } from '../data/resource/model/summary.model';
import { mockResourceSummaries } from '../data/mock-data';

@Injectable({
    providedIn: 'root'
})
export class PromotedResourcesResolve implements Resolve<ResourceSummary[]> {
  constructor() { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
          ResourceSummary[] | Observable<ResourceSummary[]> | Promise<ResourceSummary[]> {

    return mockResourceSummaries;
  }
}
