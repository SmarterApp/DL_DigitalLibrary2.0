import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { FooterLink, TenantTheme } from 'src/app/data/tenant-theme/tenant-theme.model';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { UserService } from 'src/app/data/user/user.service';
import { User } from 'src/app/data/user/user.model';

@Component({
  selector: 'sbdl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  user$: Observable<User>;
  tenantName$: Observable<string>;
  tenantFooterLinks$: Observable<FooterLink[]>;

  constructor(
    private userService: UserService,
    private tenantThemeService: TenantThemeService
  ) {
    this.user$ = userService.user;
    const theme$ = userService.user.pipe(
      mergeMap(user => tenantThemeService.getTenantTheme(user)));

    this.tenantName$ = theme$.pipe(map(t => t.displayName));
    this.tenantFooterLinks$ = theme$.pipe(map(t => t.footerLinks));
  }

  ignoreClick(ev) {
    ev.preventDefault();
    return false;
  }

}
