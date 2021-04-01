import {HttpClientModule} from '@angular/common/http';
import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {DataModule} from './data/data.module';
import {Angulartics2Module} from 'angulartics2';
import {SbdlCommonModule} from './common/common.module';
import {OktaAuthService} from '@okta/okta-angular';
import {MockOktaAuthService, mockWindowObj} from './app.module.spec';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        Angulartics2Module.forRoot(),
        HttpClientModule,
        DataModule,
        SbdlCommonModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: OktaAuthService, useClass: MockOktaAuthService},
        mockWindowObj
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sb-digital-library'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sb-digital-library');
  });
});
