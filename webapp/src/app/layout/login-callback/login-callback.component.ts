import { APP_BASE_HREF } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { takeLast, takeWhile } from 'rxjs/operators';
import { User } from 'src/app/data/user/user.model';
import { UserService } from 'src/app/data/user/user.service';
import { TftErrorService } from 'src/app/common/tft-error.service';
import { TftErrorType } from 'src/app/common/tft-error-type.enum';

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
    private errorService: TftErrorService,
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
            if (!user.isDlEndUser) {
              // we do this here so that it only happens once after the user
              // logs in but continues to allow them to browse the library as a
              // public user.
              this.errorService.redirectTftError({
                type: TftErrorType.AuthNoAppAccess,
                details: 'User has no tenancy chain with the role of DL_EndUser.'
              });
            } else {
              this.router.navigateByUrl(this.loginTarget.uri || this.baseHref, this.loginTarget.extras);
            }
          });
      });
    } else {
      this.router.navigateByUrl(this.loginTarget.uri || this.baseHref, this.loginTarget.extras);
    }
  }

}
