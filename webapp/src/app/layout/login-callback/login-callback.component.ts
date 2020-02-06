import { APP_BASE_HREF } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { combineLatest } from 'rxjs';
import { tap, takeLast, takeWhile } from 'rxjs/operators';
import { TftErrorService } from 'src/app/common/tft-error.service';
import { TftErrorType } from 'src/app/common/tft-error-type.enum';
import { User } from 'src/app/data/user/user.model';
import { UserService } from 'src/app/data/user/user.service';

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
    private oktaAuthService: OktaAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private tftErrorService: TftErrorService,
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
        combineLatest(
          this.userService.user,
          this.userService.hasOktaAuthToken
        ).pipe(
          takeWhile(([user, hasOktaToken]) => !hasOktaToken, true),
          takeLast(1)
        ).subscribe(([user, hasOktaToken]) => {
          if (user) {
            this.router.navigateByUrl(this.loginTarget.uri || this.baseHref, this.loginTarget.extras);
          } else {
            // In this case we have a valid Okta token but do not have a valid
            // DL user. The only way for this to happen is if they do not have
            // a tenancy chain with the DL_EndUser role.
            this.tftErrorService.redirectTftError({
              type: TftErrorType.AuthNoAppAccess,
              details: 'User has no tenancy chain with the role of DL_EndUser.'
            });
          }
        });
      });
    } else {
      this.router.navigateByUrl(this.loginTarget.uri || this.baseHref, this.loginTarget.extras);
    }
  }

}
