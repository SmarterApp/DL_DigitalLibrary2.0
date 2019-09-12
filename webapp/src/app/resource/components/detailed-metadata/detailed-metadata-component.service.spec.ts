import { TestBed } from '@angular/core/testing';

import { DetailedMetadataComponentService } from './detailed-metadata-component.service';

describe('DetailedMetadataComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailedMetadataComponentService = TestBed.get(DetailedMetadataComponentService);
    expect(service).toBeTruthy();
  });

  it('should return claims image path', () => {
    const service: DetailedMetadataComponentService = TestBed.get(DetailedMetadataComponentService);
    const actual = service.getClaimImagePath('MATH', '1');

    expect(actual).toBe('/assets/images/claims/math-1.png');
  });

  it('should return undefined for invalid subject', () => {
    const service: DetailedMetadataComponentService = TestBed.get(DetailedMetadataComponentService);
    const actual = service.getClaimImagePath('art', '1');

    expect(actual).toBeUndefined();
  });

  it('should return undefined for claim that is not a number', () => {
    const service: DetailedMetadataComponentService = TestBed.get(DetailedMetadataComponentService);
    const actual = service.getClaimImagePath('math', 'potato');

    expect(actual).toBeUndefined();
  });

  it('should return undefined for claim that is too high of a number', () => {
    const service: DetailedMetadataComponentService = TestBed.get(DetailedMetadataComponentService);
    const actual = service.getClaimImagePath('math', '5');

    expect(actual).toBeUndefined();
  });

  it('should return undefined for claim that is too low of a number', () => {
    const service: DetailedMetadataComponentService = TestBed.get(DetailedMetadataComponentService);
    const actual = service.getClaimImagePath('math', '0');

    expect(actual).toBeUndefined();
  });
});
