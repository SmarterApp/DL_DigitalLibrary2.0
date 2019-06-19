import { Component } from '@angular/core';
import { AppConfig } from './config/app.config';
import { VERSION } from 'src/environments/version';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'sbdl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {  
    if(AppConfig.settings && AppConfig.settings.enableAnalytics) {
      angulartics2GoogleAnalytics.startTracking();
    }
  }

  title = 'sb-digital-library';
  env = AppConfig.settings ? AppConfig.settings.env.name : '<not set>';
  appVersion = VERSION;
}
