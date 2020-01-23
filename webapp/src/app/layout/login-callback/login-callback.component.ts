import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { takeLast, takeWhile } from 'rxjs/operators';
import { UserService } from 'src/app/data/user/user.service';

@Component({
  selector: 'sbdl-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements AfterViewInit, OnInit {

  private fromUri: {uri: string, extras?: NavigationExtras } = { uri: '/auth/login' };
  private parsingToken = false;
  private callbackState: 'parseToken' | 'forwardWithUser';

  constructor(
    private oktaAuthService: OktaAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    // TODO: probably better to subscribe to router events or somethin in case
    // we somehow get redirected back to ourselves with a new token. Might not
    // trigger a destroy/init cycle
    if (this.route.snapshot.fragment && this.route.snapshot.fragment.includes('token=')) {
      this.parsingToken = true;
      this.fromUri = this.oktaAuthService.getFromUri();
      this.oktaAuthService.setFromUri('/auth/login-callback');
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
            this.router.navigate([this.fromUri.uri], this.fromUri.extras);
          });
      });
    } else {
      this.router.navigate([this.fromUri.uri], this.fromUri.extras);
    }
  }
}
