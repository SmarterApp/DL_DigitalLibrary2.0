import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Angulartics2Module } from 'angulartics2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './config/app.config';
import { DataModule } from './data/data.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { ResourceModule } from './resource/resource.module';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Angulartics2Module.forRoot(),
    BrowserModule,
    AppRoutingModule,
    DataModule,
    LayoutModule,
    HomeModule,
    ResourceModule
  ],
  providers: [{ 
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [ AppConfig ], multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
