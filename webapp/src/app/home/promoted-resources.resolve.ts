import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceSummary } from '../data/resource/model/summary.model';
import { ResourceService } from '../data/resource/resource.service';

@Injectable({
    providedIn: 'root'
})
export class PromotedResourcesResolve implements Resolve<ResourceSummary[]> {
  constructor(private resourceService: ResourceService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
          Observable<ResourceSummary[]> {

    return this.resourceService.getResourceSummariesForIds([126, 200]);
  }
}
