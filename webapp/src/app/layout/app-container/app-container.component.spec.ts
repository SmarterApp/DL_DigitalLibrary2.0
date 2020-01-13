import { APP_BASE_HREF, Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { AppContainerComponent } from './app-container.component';
import { mockRootActivatedRouteSnapshot } from 'src/app/app.module.spec';
import { SbdlCommonModule } from 'src/app/common/common.module';
import { OktaAuthService } from '@okta/okta-angular';

class MockOktaAuthService {
  $authenticationState: object;
  public isAuthenticated(): boolean { return false; }
  constructor() {
    this.$authenticationState = { subscribe() {} };
  }
}

describe('AppContainerComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContainerComponent, HeaderComponent, FooterComponent, NavigationComponent ],
      imports: [ RouterTestingModule, SbdlCommonModule ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRootActivatedRouteSnapshot },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: Location, useValue: { path: () => {} } },
        { provide: OktaAuthService, useClass: MockOktaAuthService }
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
