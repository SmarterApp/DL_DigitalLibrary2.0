import { TestBed } from '@angular/core/testing';

import { MetadataComponentService } from './metadata-component.service';

describe('StrategyMetadataComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetadataComponentService = TestBed.get(MetadataComponentService);
    expect(service).toBeTruthy();
  });
});
