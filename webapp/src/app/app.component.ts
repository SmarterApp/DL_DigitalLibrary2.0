import {Component, OnInit} from '@angular/core';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {VERSION} from 'src/environments/version';
import {AppConfig} from './common/config/app.config';
import {UserService} from "./data/user/user.service";

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
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private userService:UserService,
  ) {}

    ngOnInit  () {
    if (AppConfig.settings) {
      this.env = AppConfig.settings.env.name;

      if (AppConfig.settings.enableAnalytics) {
        this.angulartics2GoogleAnalytics.startTracking();
      }
    }
     //seamless login on page load if user has active session
      this.userService.userSessionCheck();
    }
}
