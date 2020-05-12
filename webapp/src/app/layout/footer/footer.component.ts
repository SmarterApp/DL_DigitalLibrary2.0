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
  theme$: Observable<TenantTheme>;
  tenantName$: Observable<string>;
  tenantFooterLinks$: Observable<FooterLink[]>;
  tenantFooterLogo$: Observable<string>;
  tenantFooterSocialLinks$: Observable<FooterLink[]>;

  constructor(
    private userService: UserService,
    private tenantThemeService: TenantThemeService
  ) {
    this.user$ = userService.user;
    this.theme$ = tenantThemeService.currentTenantTheme$;

    this.tenantName$ = this.theme$.pipe(map(t => t.displayName));
    this.tenantFooterLinks$ = this.theme$.pipe(map(t => t.footerResourceLinks));
    this.tenantFooterLogo$ = this.theme$.pipe(map(t => t.logoUris.footer));
    this.tenantFooterSocialLinks$ = this.theme$.pipe(map(t => t.footerSocialLinks));
  }

  ignoreClick(ev) {
    ev.preventDefault();
    return false;
  }

}
