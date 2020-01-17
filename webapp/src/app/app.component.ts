import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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

  private oldPath = '/';

  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private route: ActivatedRoute,
    private router: Router,
    private routerService: RouterService
  ) {
    if (AppConfig.settings && AppConfig.settings.enableAnalytics) {
      angulartics2GoogleAnalytics.startTracking();
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        const newPath = this.urlPathPart(evt.url);
        if (newPath !== this.oldPath) {
          window.scrollTo(0, 0);
        }
        this.oldPath = newPath;
      }
    });

    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          document.querySelector('#' + fragment).scrollIntoView({behavior: 'smooth'});
        });
      }
    });

    // Gracefully redirect to error pages.
    this.routerService.setRouteErrorHandler();
  }

  private urlPathPart(url: string): string {
    const PATH_REGEX = /(^[^?&;#]+)/;
    return url.match(PATH_REGEX)[1] || '';
  }
}
