import {ChangeDetectionStrategy, Component} from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'sbdl-preview-login-prompt',
  templateUrl: './preview-login-prompt.component.html',
  styleUrls: ['./preview-login-prompt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewLoginPromptComponent {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private oktaAuthService: OktaAuthService
  ) {}

  onLoginButtonClick(): void {
    this.loading$.next(true);
    // this.oktaAuthService.loginRedirect();
  }
}
