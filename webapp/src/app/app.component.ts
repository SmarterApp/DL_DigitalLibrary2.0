import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { VERSION } from 'src/environments/version';
import { AppConfig } from './common/config/app.config';

@Component({
  selector: 'sbdl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private router: Router) {  
    if(AppConfig.settings && AppConfig.settings.enableAnalytics) {
      angulartics2GoogleAnalytics.startTracking();
    }
  }

  ngOnInit() {
    // Scroll to the top on route changes
    this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd && evt.url.indexOf('results') === -1) {
          window.scrollTo(0, 0)
        }
    });
  }

  title = 'sb-digital-library';
  env = AppConfig.settings ? AppConfig.settings.env.name : '<not set>';
  appVersion = VERSION;
}
