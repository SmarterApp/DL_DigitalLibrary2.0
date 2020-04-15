import { TestBed } from '@angular/core/testing';

import { LoginWarningStateServiceService } from './login-warning-state-service.service';

describe('LoginWarningStateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginWarningStateServiceService = TestBed.get(LoginWarningStateServiceService);
    expect(service).toBeTruthy();
  });
});
