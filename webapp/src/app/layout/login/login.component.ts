import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { map } from 'rxjs/operators';
import { PreloginSelectionsService } from 'src/app/data/prelogin-selections/prelogin-selections.service';
import { PreloginSelection } from 'src/app/data/prelogin-selections/model/prelogin-selection.model';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'sbdl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logo$: Observable<string>;

  preloginSelectionId = "";
  preloginSelections: PreloginSelection[];

  goButtonHidden = true;
  selectMenuHidden = true;

  private selectionsSubscription: Subscription;

  constructor(
    private tenantThemeService: TenantThemeService,
    private preloginSelectionsService: PreloginSelectionsService,
    private router: Router,
    private oktaAuthService: OktaAuthService
  ) {
    this.logo$ = tenantThemeService.currentTenantTheme$.pipe(
      map(theme => theme.logoUris.full));
  }

  ngOnInit() {
    this.selectionsSubscription = this.preloginSelectionsService.getAll().subscribe(sel => {
      this.preloginSelections = sel.result;
    });
  }

  ngOnDestroy() {
    if (this.selectionsSubscription) {
      this.selectionsSubscription.unsubscribe();
    }
  }

  onPreloginSelected() {
    this.goButtonHidden = false;
  }

  onGoButtonClicked() {
    const sel = this.preloginSelections.find(s => s.preloginSelectionId.toString() === this.preloginSelectionId);
    this.oktaAuthService.loginRedirect(this.router.url, { idp: [sel.oktaIdpId] });
  }
}
