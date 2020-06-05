import { TestBed } from '@angular/core/testing';
import { LoginWarningService } from './login-warning.service';
import { StorageService } from 'src/app/common/storage.service';
import { Observable } from 'rxjs';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { PopoverComponent } from 'src/app/common/controls/popover/popover.component';
import { PopoverService } from 'src/app/common/controls/popover/popover.service';
import { IconComponent } from 'src/app/common/icon/icon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { UserService } from 'src/app/data/user/user.service';

const mockAuthService = jasmine.createSpyObj('OktaAuthService', ['loginRedirect']);
const mockPopoverService = jasmine.createSpyObj('PopoverService', ['openOnBody']);
const mockStorageService = jasmine.createSpyObj('StorageService', ['getLoginWarningDisplayed', 'setLoginWarningDisplayed']);

const mockAuthenticated = new Observable<boolean>();
const mockUserService = <UserService> { 
  authenticated: mockAuthenticated
}

describe('LoginWarningService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule ],
    declarations: [ PopoverComponent, IconComponent ],
    providers: [
      ...mockDataServiceProviders,
      { provide: PopoverService, useValue: mockPopoverService },
      { provide: StorageService, useValue: mockStorageService },
      { provide: OktaAuthService, useValue: mockAuthService },
      { provide: UserService, useValue: mockUserService }
    ]
  }));

  it('should be created', () => {
    const service: LoginWarningService = TestBed.get(LoginWarningService);
    expect(service).toBeTruthy();
  });
});
