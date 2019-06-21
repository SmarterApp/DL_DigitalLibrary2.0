import { TestBed } from '@angular/core/testing';
import { LoggingService } from 'src/app/logging/logging.service';
import { DataService } from '../data.service';
import { initializeSettingsProvider } from '../mock-data';
import { MockDataService } from '../mock-data.service';
import { UserService } from './user.service';


describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ 
      { provide: DataService, useClass: MockDataService }, 
      LoggingService, 
      initializeSettingsProvider 
    ]
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
