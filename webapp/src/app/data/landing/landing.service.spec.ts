import { TestBed } from '@angular/core/testing';

import { LandingService } from './landing.service';

describe('LandingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandingService = TestBed.get(LandingService);
    expect(service).toBeTruthy();
  });
});
