import {TestBed} from '@angular/core/testing';
import {mockDataServiceProviders} from 'src/app/app.module.spec';
import {SearchService} from './search.service';
import {UserService} from "../user/user.service"
import {Observable} from "rxjs";
import {User} from "../user/user.model";

const mockAuthenticated = new Observable<User>();
const mockUserService = <UserService>{
  user: mockAuthenticated
}
describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      mockDataServiceProviders,
      {provide: UserService, useValue: mockUserService},
    ]
  }));

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });
});
