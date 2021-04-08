import { LandingPage } from '../data/landing/model/landingPage.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { flatMap, take } from 'rxjs/operators';
import { LandingService } from '../data/landing/landing.service';

@Injectable({
    providedIn: 'root'
})
export class LandingResolve implements Resolve<LandingPage> {
    constructor(
      private landingPageService: LandingService) { }

    resolve() {
        return this.landingPageService.get();
    }

}