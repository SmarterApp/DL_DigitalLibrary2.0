import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data/user/user.service';

@Component({
  selector: 'sbdl-login-warning',
  templateUrl: './login-warning.component.html',
  styleUrls: ['./login-warning.component.scss']
})
export class LoginWarningComponent {

  

  constructor(
    private oktaAuthService: OktaAuthService,
    private router: Router,
    private userService: UserService
  ) { 
    // this.hasToken$ = userService.hasOktaAuthToken;
  }

  login() {
    this.oktaAuthService.loginRedirect(this.router.url);
  }

}
