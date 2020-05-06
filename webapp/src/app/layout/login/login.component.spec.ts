import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { MockTenantThemeService } from 'src/app/app.module.spec';
import { PreloginSelectionsService } from 'src/app/data/prelogin-selections/prelogin-selections.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/controls/button/button.component';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

const mockAuthService = jasmine.createSpyObj('OktaAuthService', ['loginRedirect']);

const mockPreloginSelectionsService = jasmine.createSpyObj('MockPreloginSelectionsService', ['getAll']);
mockPreloginSelectionsService.getAll.and.callFake(function() {
  return of([]);
});

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule
      ],
      providers: [
        { provide: TenantThemeService, useClass: MockTenantThemeService },
        { provide: PreloginSelectionsService, useValue: mockPreloginSelectionsService },
        { provide: Router, useValue: jasmine.createSpy('Router') },
        { provide: OktaAuthService, useValue: mockAuthService },
      ],
      declarations: [ LoginComponent, ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
