import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Angulartics2Module } from 'angulartics2';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './common/config/app.config';
import { GlobalErrorHandler } from './common/global-error-handler';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { DataModule } from './data/data.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { ResourceModule } from './resource/resource.module';
import { JoinPipe } from './pipes/join.pipe';
import { IconComponent } from './common/icon/icon.component';
import { SvgDefsComponent } from './common/icon/svg-defs.component';
import { SbdlCommonModule } from './common/common.module';
import { NotesModule } from './notes/notes.module';

import { OKTA_CALLBACK_PATH } from './common/constants';
export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

const oktaConfig = {
  issuer: 'https://smarterbalanced.oktapreview.com/oauth2/auslw2qcsmsUgzsqr0h7',
  clientId: '0oamt7hm566G44ZVm0h7',
  redirectUri: `http://${window.location.host}/${OKTA_CALLBACK_PATH}`,
  scopes: ['openid', 'profile', 'email', 'digital_library_read']
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Angulartics2Module.forRoot(),
    OktaAuthModule,
    BrowserModule,
    AppRoutingModule,

    BookmarksModule,
    DataModule,
    LayoutModule,
    HomeModule,
    ResourceModule,
    NotesModule,
    SbdlCommonModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [ AppConfig ], multi: true
  }, {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }, {
    provide: OKTA_CONFIG,
    useValue: oktaConfig,
    deps: [ AppConfig ]
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
