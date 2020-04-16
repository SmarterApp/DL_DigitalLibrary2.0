import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWarningComponent } from './login-warning.component';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import { LoginWarningStateServiceService } from './login-warning-state-service.service';

const mockAuthService = jasmine.createSpyObj('OktaAuthService', ['loginRedirect']);
const mockLoginWarningStateService = jasmine.createSpyObj('LoginWarningStateService', ['close']);

describe('LoginWarningComponent', () => {
  let component: LoginWarningComponent;
  let fixture: ComponentFixture<LoginWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWarningComponent ],
      providers: [ 
        { provide: OktaAuthService, useValue: mockAuthService },
        { provide: LoginWarningStateServiceService, useValue: mockLoginWarningStateService },
        { provide: Router, useValue: jasmine.createSpy('Router') }
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
