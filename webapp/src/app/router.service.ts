import { Injectable, Injector } from '@angular/core';
import { Router, NavigationError, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { ERROR_PATH } from './common/constants';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router,
    private location: Location,
    private injector: Injector
  ) { }

  public setRouteErrorHandler(): void {
    let errorRoute = null;
    this.router.errorHandler = (error): void => {
      this.router.navigate([ERROR_PATH, { error }], { skipLocationChange: true })
        .then(() => this.location.go(errorRoute.url));
    };

    this.router.events
      .pipe(filter(next => next instanceof NavigationError))
      .subscribe((next) => errorRoute = next);
  }

}
