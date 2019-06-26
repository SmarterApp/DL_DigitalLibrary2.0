import { ResourceModel } from '../data/resource/model/resource.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceService } from '../data/resource/resource.service';

@Injectable({
    providedIn: 'root'
})
export class ResourceResolve implements Resolve<ResourceModel> {
    constructor(private service: ResourceService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ResourceModel | Observable<ResourceModel> | Promise<ResourceModel> {
        return this.service.get(route.params.resourceId);
    }
}