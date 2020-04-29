import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { TenantTheme } from 'src/app/data/tenant-theme/tenant-theme.model';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { UserService } from 'src/app/data/user/user.service';
import { User } from 'src/app/data/user/user.model';

@Component({
  selector: 'sbdl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  hasToken$: Observable<boolean>;
  logo$: Observable<string>;

  constructor(
    @Inject(APP_BASE_HREF) public baseHref: string,
    private domSanitizer: DomSanitizer,
    private oktaAuthService: OktaAuthService,
    private router: Router,
    private tenantThemeService: TenantThemeService,
    private userService: UserService
  ) {
    this.hasToken$ = userService.hasOktaAuthToken;
    this.logo$ = this.tenantThemeService.currentTenantTheme$.pipe(
      map(theme => theme.logoUris.full));
  }

  get user$(): Observable<User> {
    return this.userService.user;
  }

  login() {
    this.router.navigate(['/auth/login']);
  }

}
