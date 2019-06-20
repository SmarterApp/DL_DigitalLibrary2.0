import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { DataService } from '../data.service';
import { MockDataService } from '../mock-data.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ { provide: DataService, useClass: MockDataService }]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
