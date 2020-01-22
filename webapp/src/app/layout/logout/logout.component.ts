import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'sbdl-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements AfterViewInit, OnInit {
  constructor(
    private oktaAuthService: OktaAuthService,
    private router: Router) {}

  ngOnInit() {
    this.oktaAuthService.logout();
  }

  ngAfterViewInit() {
    setTimeout(() => this.router.navigate(['/']), 3000);
  }
}
