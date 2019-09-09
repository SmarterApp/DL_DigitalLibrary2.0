import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'sbdl-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  isAuthenticated: boolean;
  userInitials = '';

  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      async (isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
        this.userInitials = await this.fetchUserInitials();
      }
    );
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) { this.userInitials = await this.fetchUserInitials(); }
  }

  logout() {
    this.oktaAuth.logout('/');
  }

  async fetchUserInitials() {
    if (!this.isAuthenticated) { return ''; }
    const userClaims = await this.oktaAuth.getUser();
    return userClaims.email.slice(0,2);
    console.log(userClaims);
  }
}
