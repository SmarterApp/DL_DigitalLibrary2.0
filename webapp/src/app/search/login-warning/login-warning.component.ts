import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import { LoginWarningService } from './login-warning.service';
import { SearchQueryParams } from '../search.component';
import { StorageService } from 'src/app/common/storage.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/data/user/user.service';
import { SessionStateKey } from 'src/app/common/enums/session-state-key.enum';

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

  private authenticated: boolean;
  private authSubscription: Subscription;

  constructor(
    private oktaAuthService: OktaAuthService,
    private router: Router,
    private loginWarningService: LoginWarningService,
    private userService: UserService,
    private storageService: StorageService,
  ) { 
    this.closeClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.authSubscription = this.userService.authenticated
      .subscribe((auth) => this.authenticated = auth);
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  login() {
    this.close();
    this.router.navigate(['/auth/login']);
  }

  shouldDisplay(sessionKey: SessionStateKey): boolean {
    const previouslyDisplayed = this.storageService.getLoginWarningDisplayed(sessionKey);
    const displayPopover = !this.authenticated && !previouslyDisplayed;

    return displayPopover;
  }

  close = () => {
    this.loginWarningService.close();
  }  
}