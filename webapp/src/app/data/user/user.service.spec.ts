import { TestBed } from '@angular/core/testing';
import { mockDataServiceProviders } from '../mock-data';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ...mockDataServiceProviders ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should get the current user', () => {
    const service: UserService = TestBed.get(UserService);
    service.getCurrentUser().subscribe(actual => {
      expect(actual.firstName).toBe('Mary');
      expect(actual.lastName).toBe('Anderson');
      expect(actual.tenantName).toBe('California');
    })
  })
});
