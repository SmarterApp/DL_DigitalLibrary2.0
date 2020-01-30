import { APP_BASE_HREF } from '@angular/common';
import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { AppContainerComponent } from './app-container.component';
import { SbdlCommonModule } from 'src/app/common/common.module';
import { UserService } from 'src/app/data/user/user.service';
import {
  mockRootActivatedRouteSnapshot,
  MockOktaAuthService,
  MockUserService
} from 'src/app/app.module.spec';

describe('AppContainerComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContainerComponent, FooterComponent, NavigationComponent ],
      imports: [ RouterTestingModule.withRoutes([]), SbdlCommonModule ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ActivatedRoute, useValue: mockRootActivatedRouteSnapshot },
        { provide: Location, useValue: { path: () => {} } },
        { provide: OktaAuthService, useClass: MockOktaAuthService },
        { provide: UserService, useClass: MockUserService }
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
