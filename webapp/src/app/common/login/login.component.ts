import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sbdl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logo$: Observable<string>;

  constructor(
    private tenantThemeService: TenantThemeService
  ) {
    this.logo$ = tenantThemeService.currentTenantTheme$.pipe(
      map(theme => theme.logoUris.full));
   }

  ngOnInit() {
  }

}
