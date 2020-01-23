import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'sbdl-preview-login-prompt',
  templateUrl: './preview-login-prompt.component.html',
  styleUrls: ['./preview-login-prompt.component.scss']
})
export class PreviewLoginPromptComponent {
  loading = false;

  constructor(private oktaAuthService: OktaAuthService) {}

  login() {
    this.loading = true;
    this.oktaAuthService.loginRedirect();
  }
}
