import { TestBed } from '@angular/core/testing';

import { StrategyMetadataComponentService } from './strategy-metadata-component.service';

describe('StrategyMetadataComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StrategyMetadataComponentService = TestBed.get(StrategyMetadataComponentService);
    expect(service).toBeTruthy();
  });
});
