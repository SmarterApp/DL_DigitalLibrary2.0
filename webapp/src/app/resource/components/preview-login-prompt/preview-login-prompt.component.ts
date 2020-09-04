import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';
import {OktaAuthService} from '@okta/okta-angular';
import {BehaviorSubject} from 'rxjs';
import {StorageService} from "../../../common/storage.service";

@Component({
  selector: 'sbdl-preview-login-prompt',
  templateUrl: './preview-login-prompt.component.html',
  styleUrls: ['./preview-login-prompt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewLoginPromptComponent {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private oktaAuthService: OktaAuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  onLoginButtonClick(): void {
    this.loading$.next(true);
    //use to differential between seamless login and normal login
    this.storageService.set("isNormalLoginFlow",'1');
    this.router.navigate(['/auth/login'], { queryParams: { redirectUrl: this.router.url }});
  }
}
