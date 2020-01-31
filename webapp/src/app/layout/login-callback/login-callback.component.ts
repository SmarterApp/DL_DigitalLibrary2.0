import { APP_BASE_HREF } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { takeLast, takeWhile } from 'rxjs/operators';
import { User } from 'src/app/data/user/user.model';
import { UserService } from 'src/app/data/user/user.service';
import { TftError, TftErrorType } from 'src/app/common/tft-error-type.enum';
import { TftErrorService } from 'src/app/common/tft-error.service';
import { ERROR_PATH } from 'src/app/common/constants';

@Component({
  selector: 'sbdl-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements AfterViewInit, OnInit {

  private parsingToken = false;
  private loginTarget: { uri: string, extras?: NavigationExtras };

  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string,
    private errorRedirectService: TftErrorService,
    private oktaAuthService: OktaAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.loginTarget = { uri: baseHref };
  }

  ngOnInit() {
    // TODO: probably better to subscribe to router events or something in case
    // we somehow get redirected back to ourselves with a new token. Might not
    // trigger a destroy/init cycle
    if (this.route.snapshot.fragment && this.route.snapshot.fragment.includes('token=')) {
      this.parsingToken = true;
      this.loginTarget = this.oktaAuthService.getFromUri();
      this.oktaAuthService.setFromUri(this.baseHref + 'auth/login-callback');
    }
  }

  ngAfterViewInit() {
    if (this.parsingToken) {
      this.oktaAuthService.handleAuthentication().then(() => {
        this.userService.user
          .pipe(
            takeWhile(u => u === null, true),
            takeLast(1))
          .subscribe(user => {
            const error = this.validateUserSession(user);
            if (error) {
              this.errorRedirectService.redirectTftError(error);
            } else {
              this.router.navigateByUrl(this.loginTarget.uri || this.baseHref, this.loginTarget.extras);
            }
          });
      });
    } else {
      this.router.navigateByUrl(this.loginTarget.uri || this.baseHref, this.loginTarget.extras);
    }
  }

  validateUserSession(user: User): TftError | null {
    if (!user.accessToken) {
      return {
        type: TftErrorType.AuthNoAppAccess,
        details: 'User has no access token.'
      };
    }

    if (user.tenantIds.length === 0) {
      return {
        type: TftErrorType.AuthNoAppAccess,
        details: 'User has no tenancy chain with the role of DL_EndUser.'
      };
    }
  }
}
