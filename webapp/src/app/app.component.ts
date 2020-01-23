import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { VERSION } from 'src/environments/version';
import { AppConfig } from './common/config/app.config';
import { RouterService } from './router.service';

@Component({
  selector: 'sbdl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'sb-digital-library';
  env = AppConfig.settings ? AppConfig.settings.env.name : '<not set>';
  appVersion = VERSION;

  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private routerService: RouterService
  ) {
    if (AppConfig.settings && AppConfig.settings.enableAnalytics) {
      angulartics2GoogleAnalytics.startTracking();
    }
  }

  ngOnInit() {

    // Gracefully redirect to error pages.
    this.routerService.setRouteErrorHandler();
  }

}
