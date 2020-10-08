import {AfterViewInit, Component, Inject} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {Router} from '@angular/router';
import {OktaAuthService} from '@okta/okta-angular';
import {StorageService} from "../../common/storage.service";
import {UserService} from "../../data/user/user.service";

@Component({
  selector: 'sbdl-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements AfterViewInit {

  constructor(
    @Inject(APP_BASE_HREF) private appBaseHref: string,
    private oktaAuthService: OktaAuthService,
    private storageService : StorageService,
    private userService : UserService,
    private router: Router
  ) {}

  ngAfterViewInit() {

    const pauseAndRedirect = () => {
      this.storageService.remove('userSessionState');
      setTimeout(() => this.router.navigate([this.appBaseHref]), 2000);
    }
    this.oktaAuthService.logout().then(
      pauseAndRedirect,
      pauseAndRedirect);
    this.userService.clearTokenExpirationTimer();
  }

}
