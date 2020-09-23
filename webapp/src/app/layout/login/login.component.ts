import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { map } from 'rxjs/operators';
import { PreloginSelectionsService } from 'src/app/data/prelogin-selections/prelogin-selections.service';
import { PreloginSelection } from 'src/app/data/prelogin-selections/model/prelogin-selection.model';
import { ActivatedRoute, Params } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import {StorageService} from "../../common/storage.service";

const redirectUrlParameter = 'redirectUrl';

@Component({
  selector: 'sbdl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logo$: Observable<string>;

  preloginSelectionId = "";
  preloginSelections: PreloginSelection[];
  infoText = "";

  goButtonHidden = true;
  selectMenuHidden = true;
  queryParams: Params;

  private selectionsSubscription: Subscription;
  private queryParamsSubscription: Subscription;

  constructor(
    private tenantThemeService: TenantThemeService,
    private preloginSelectionsService: PreloginSelectionsService,
    private oktaAuthService: OktaAuthService,
    private route: ActivatedRoute,
    private storageService : StorageService
  ) {
    this.logo$ = tenantThemeService.currentTenantTheme$.pipe(
      map(theme => theme.logoUris.full));
  }

  ngOnInit() {
    this.selectionsSubscription = this.preloginSelectionsService.getAll().subscribe(sel => {
      this.preloginSelections = sel.result;
    });

    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.queryParams = params;
    })
  }

  ngOnDestroy() {
    if (this.selectionsSubscription) {
      this.selectionsSubscription.unsubscribe();
    }

    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  onPreloginSelected() {
    this.goButtonHidden = false;
    this.infoText = this.preloginSelections.find(s => s.preloginSelectionId.toString() === this.preloginSelectionId).infoText;
  }

  onGoButtonClicked() {
    const sel = this.preloginSelections.find(s => s.preloginSelectionId.toString() === this.preloginSelectionId);
    //use to differential between seamless login and normal login
    this.storageService.set('isNormalLoginFlow', '1');
    this.oktaAuthService.loginRedirect(this.queryParams[redirectUrlParameter], { idp: [sel.oktaIdpId] });
  }
}
