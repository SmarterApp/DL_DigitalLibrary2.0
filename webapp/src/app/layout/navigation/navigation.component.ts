import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { UserService } from 'src/app/data/user/user.service';
import { User } from 'src/app/data/user/user.model';

@Component({
  selector: 'sbdl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isAuthenticated: boolean;

  constructor(
    @Inject(APP_BASE_HREF) public baseHref: string,
    private oktaAuthService: OktaAuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.userService.user.subscribe((user: User) => {
      this.isAuthenticated = user !== null;
    });
  }

  login() {
    this.oktaAuthService.loginRedirect(this.router.url);
  }

}
