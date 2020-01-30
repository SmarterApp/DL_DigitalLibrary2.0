import { TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { mockDataServiceProviders, MockOktaAuthService } from 'src/app/mocks';
import { UserService } from './user.service';
import { TenancyLevel, UserTenancy } from './user.model';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ...mockDataServiceProviders,
      { provide: OktaAuthService, useClass: MockOktaAuthService }
    ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should parse state-only sbacTenancyChain', () => {
    const stateOnly = '|CA|DL_EndUser|STATE|1000|ART_DL|||CA|CALIFORNIA|||||||||';
    const chain = UserService.parseSbacTenancyChain([stateOnly]);
    expect(chain.length).toBe(1);
    expect(chain[0].level).toEqual(TenancyLevel.State);
    expect(chain[0].role).toEqual({id: 'CA', name: 'DL_EndUser'});
    expect(chain[0].state).toEqual({id: 'CA', name: 'CALIFORNIA'});
    expect(chain[0].stateGroup).toBeUndefined();
  });

  it('should only return DL_EndUser tenancy chains', () => {
    const noDL = '|1000|NULL|CLIENT|1000|ART_DL|||||||||||||';
    const chain = UserService.parseSbacTenancyChain([noDL]);
    expect(chain.length).toBe(0);
  });
});
