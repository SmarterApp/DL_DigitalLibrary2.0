import { Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { catchError, delay } from 'rxjs/operators';

@Component({
  selector: 'sbdl-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements AfterViewInit {

  constructor(
    @Inject(APP_BASE_HREF) private appBaseHref: string,
    private oktaAuthService: OktaAuthService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    const pauseAndRedirect = () => setTimeout(() => this.router.navigate([this.appBaseHref]), 2000);
    this.oktaAuthService.logout().then(
      pauseAndRedirect,
      pauseAndRedirect);
  }

}
