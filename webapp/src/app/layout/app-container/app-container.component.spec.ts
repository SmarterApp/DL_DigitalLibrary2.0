import { APP_BASE_HREF } from '@angular/common';
import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { AppContainerComponent } from './app-container.component';
import {initializeSettingsProvider, mockRootActivatedRouteSnapshot} from 'src/app/mocks';
import { SbdlCommonModule } from 'src/app/common/common.module';
import { User } from 'src/app/data/user/user.model';
import { UserService } from 'src/app/data/user/user.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {SafeUrlPipe} from '../../pipes/safe-url.pipe';
import {HttpClientTestingModule} from '@angular/common/http/testing';

class MockOktaAuthService {
  $authenticationState: object;
  public isAuthenticated(): boolean { return false; }
  constructor() {
    this.$authenticationState = { subscribe() {} };
  }
}

class MockUserService {
  get user(): Observable<User> { return of(null); }
}

describe('AppContainerComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppContainerComponent,
        FooterComponent,
        NavigationComponent,
        SafeUrlPipe
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        SbdlCommonModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ActivatedRoute, useValue: mockRootActivatedRouteSnapshot },
        { provide: Location, useValue: { path: () => {} } },
        { provide: OktaAuthService, useClass: MockOktaAuthService },
        { provide: UserService, useClass: MockUserService },
        initializeSettingsProvider
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
