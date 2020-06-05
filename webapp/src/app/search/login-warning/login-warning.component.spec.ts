import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginWarningComponent } from './login-warning.component';
import { OktaAuthService } from '@okta/okta-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginWarningService } from './login-warning.service';
import { StorageService } from 'src/app/common/storage.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/data/user/user.service';

const mockAuthService = jasmine.createSpyObj('OktaAuthService', ['loginRedirect']);
const mockLoginWarningService = jasmine.createSpyObj('LoginWarningService', ['close']);
const mockStorageService = jasmine.createSpyObj('StorageService', ['getLoginWarningDisplayed']);

const mockAuthenticated = new Observable<boolean>();
const mockUserService = <UserService> { 
  authenticated: mockAuthenticated
}

describe('LoginWarningComponent', () => {
  let component: LoginWarningComponent;
  let fixture: ComponentFixture<LoginWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWarningComponent ],
      providers: [ 
        { provide: OktaAuthService, useValue: mockAuthService },
        { provide: LoginWarningService, useValue: mockLoginWarningService },
        { provide: Router, useValue: jasmine.createSpy('Router') },
        { provide: ActivatedRoute, useValue: jasmine.createSpy('ActivatedRoute') },
        { provide: StorageService, useValue: mockStorageService },
        { provide: UserService, useValue: mockUserService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
