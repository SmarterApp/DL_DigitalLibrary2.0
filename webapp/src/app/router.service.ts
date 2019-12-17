import { Injectable } from '@angular/core';
import { Router, NavigationError, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { ERROR_PATH } from './common/constants';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private errorRoot: string;

  constructor(
    private router: Router,
    private location: Location
  ) { }

  public setRouteErrorHandler(errorRoot: string = 'error'): void {
    let errorRoute = null;
    this.errorRoot = errorRoot;
    this.router.errorHandler = (error): void => {
      this.router.navigate([ERROR_PATH], { skipLocationChange: true })
        .then(() => this.location.go(errorRoute.url));
    };

    this.router.events
      .pipe(filter(next => next instanceof NavigationError))
      .subscribe((next) => errorRoute = next);
  }

}
