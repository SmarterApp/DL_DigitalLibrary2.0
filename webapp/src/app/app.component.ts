import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
    private router: Router,
    private routerService: RouterService
  ) {
    if (AppConfig.settings && AppConfig.settings.enableAnalytics) {
      angulartics2GoogleAnalytics.startTracking();
    }
  }

  ngOnInit() {
    // Scroll to the top on route changes (except on search filter changes)
    this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd && evt.url.indexOf('search') === -1) {
          window.scrollTo(0, 0);
        }
    });

    // Gracefully redirect to error pages.
    this.routerService.setRouteErrorHandler();
  }

}
