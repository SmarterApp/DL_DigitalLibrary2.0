import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';
import { mockDataServiceProviders } from 'src/app/app.module.spec';

describe('FavoriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: mockDataServiceProviders
  }));

  it('should be created', () => {
    const service: FavoriteService = TestBed.get(FavoriteService);
    expect(service).toBeTruthy();
  });
});
