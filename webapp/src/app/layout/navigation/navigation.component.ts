import { Component } from '@angular/core';
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
    private userService: UserService,
    private oktaAuthService: OktaAuthService
  ) {
    this.userService.user.subscribe((user: User) => {
      this.isAuthenticated = user !== null;
    });
  }

  logout() {
    this.oktaAuthService.logout('/');
  }

}
