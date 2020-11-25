import { APP_BASE_HREF } from '@angular/common';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggingService } from 'src/app/common/logging/logging.service';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { AppContainerComponent } from './app-container.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SbdlCommonModule } from 'src/app/common/common.module';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { UserService } from 'src/app/data/user/user.service';
import {
  mockWindowObj,
  initializeSettingsProvider,
  mockRootActivatedRouteSnapshot,
  MockOktaAuthService,
  MockTenantThemeService,
  MockUserService,
  MockResourceService,
} from 'src/app/app.module.spec';
import {ResourceService} from '../../data/resource/resource.service';

describe('AppContainerComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContainerComponent, FooterComponent, NavigationComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]), PipesModule, SbdlCommonModule ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ActivatedRoute, useValue: mockRootActivatedRouteSnapshot },
        { provide: Location, useValue: { path: () => {} } },
        { provide: OktaAuthService, useClass: MockOktaAuthService },
        { provide: UserService, useClass: MockUserService },
        { provide: TenantThemeService, useClass: MockTenantThemeService },
        { provide: ResourceService, useClass: MockResourceService},
        mockWindowObj,
        initializeSettingsProvider,
        LoggingService
      ]
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
