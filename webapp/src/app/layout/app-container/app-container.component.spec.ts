import { APP_BASE_HREF, Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { AppContainerComponent } from './app-container.component';
import { mockRootActivatedRouteSnapshot } from 'src/app/app.module.spec';
import { SbdlCommonModule } from 'src/app/common/common.module';
import { User } from 'src/app/data/user/user.model';
import { UserService } from 'src/app/data/user/user.service';

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
      declarations: [ AppContainerComponent, FooterComponent, NavigationComponent ],
      imports: [ RouterTestingModule, SbdlCommonModule ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRootActivatedRouteSnapshot },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: Location, useValue: { path: () => {} } },
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
