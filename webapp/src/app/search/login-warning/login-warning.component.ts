import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import { LoginWarningStateServiceService } from './login-warning-state-service.service';
import { SearchQueryParams } from '../search.component';

@Component({
  selector: 'sbdl-login-warning',
  templateUrl: './login-warning.component.html',
  styleUrls: ['./login-warning.component.scss']
})
export class LoginWarningComponent {

  @Input()
  queryParams: SearchQueryParams;

  @Output()
  closeClick: EventEmitter<any>;

  constructor(
    private oktaAuthService: OktaAuthService,
    private router: Router,
    private loginWarningStateService: LoginWarningStateServiceService
  ) { 
    this.closeClick = new EventEmitter<any>();
  }

  login() {
    const redirectUrl = this.router.createUrlTree(['/search'], { queryParams: this.queryParams }).toString().replace('search?', 'search;');
    this.oktaAuthService.loginRedirect(redirectUrl);
  }

  close() {
    this.loginWarningStateService.close();
  }
}