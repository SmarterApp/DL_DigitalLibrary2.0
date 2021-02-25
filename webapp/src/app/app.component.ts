import {Component, Inject, OnInit} from '@angular/core';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {VERSION} from 'src/environments/version';
import {AppConfig} from './common/config/app.config';
import {UserService} from './data/user/user.service';
import {OktaAuthService} from '@okta/okta-angular';
import {OKTA_CALLBACK_PATH} from './common/constants';
import { filter } from 'rxjs/operators';

declare var gtag

@Component({
  selector: 'sbdl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'sb-digital-library';
  env = '<not set>';
  appVersion = VERSION;

  constructor(
    @Inject('Window') private window: Window,
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private userService: UserService,
    private oktaAuthService: OktaAuthService
  ) {}

  ngOnInit() {
    if (AppConfig.settings) {
      this.env = AppConfig.settings.env.name;

      if (AppConfig.settings.enableAnalytics) {
        this.angulartics2GoogleAnalytics.startTracking();
      }

      gtag('config', AppConfig.settings.GA4AnalyticsTrackingId);

    }

    this.storePathOnPageLoad(this.window.location.pathname);

    this.userService.userSessionCheck();
  }

  storePathOnPageLoad(path: string) {
    if (!path.includes(OKTA_CALLBACK_PATH)) {
      this.oktaAuthService.setFromUri(path);
    }
  }
}
