import { TestBed } from '@angular/core/testing';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { SearchService } from './search.service';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: mockDataServiceProviders
  }));

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });
});
