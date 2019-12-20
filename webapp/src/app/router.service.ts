import { Injectable } from '@angular/core';
import { Router, NavigationError, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { ERROR_PATH } from './common/constants';
import { filter } from 'rxjs/operators';
import { LoggingService } from './common/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private errorRoot: string;

  constructor(
    private router: Router,
    private location: Location,
    private logger: LoggingService
  ) { }

  public setRouteErrorHandler(errorRoot: string = 'error'): void {
    let errorRoute = null;
    this.errorRoot = errorRoot;
    this.router.errorHandler = (error): void => {
      this.logger.error(error);
      this.router.navigate([ERROR_PATH], { skipLocationChange: true })
        .then(() => this.location.go(errorRoute.url));
    };

    this.router.events
      .pipe(filter(next => next instanceof NavigationError))
      .subscribe((next) => errorRoute = next);
  }

}
