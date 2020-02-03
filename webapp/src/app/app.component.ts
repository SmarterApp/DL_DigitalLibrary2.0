import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { VERSION } from 'src/environments/version';
import { AppConfig } from './common/config/app.config';

@Component({
  selector: 'sbdl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sb-digital-library';
  env = AppConfig.settings ? AppConfig.settings.env.name : '<not set>';
  appVersion = VERSION;

  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
  ) {
    if (AppConfig.settings && AppConfig.settings.enableAnalytics) {
      angulartics2GoogleAnalytics.startTracking();
    }
  }

}
