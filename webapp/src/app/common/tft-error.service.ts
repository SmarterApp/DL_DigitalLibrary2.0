import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {TftError, TftErrorType} from '../common/tft-error-type.enum';
import { ERROR_PATH } from 'src/app/common/constants';

@Injectable({
  providedIn: 'root'
})
export class TftErrorService {

  private lastTargetUrl: string;

  constructor(
    private location: Location,
    private router: Router
  ) {
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationStart))
      .subscribe((evt: NavigationStart) => this.lastTargetUrl = evt.url);
    this.lastTargetUrl = location.path();
  }

  public redirectTftError(error: TftError) {
    const destUrl = this.lastTargetUrl; // cache before we trigger another navigation
    this.router.navigate([ERROR_PATH, error], { skipLocationChange: true })
      .then(() => this.location.go(destUrl));
  }
}
