import { APP_INITIALIZER } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Observable, of } from 'rxjs';
import { AppConfig } from './common/config/app.config';
import { IAppConfig } from './common/config/config.model';
import { LoggingService } from './common/logging/logging.service';
import { DataService } from './data/data.service';
import { User } from 'src/app/data/user/user.model';
import { mockUser } from './data/mock-data';
import { MockDataService } from './data/mock-data.service';

// Common AppModule mocks here.
export const dummyObservable = {
  subscribe: () => {},
  unsubscribe: () => {}
};

export const mockRootActivatedRouteSnapshot = {
    snapshot: { data: { currentUser: mockUser } },
    fragment: dummyObservable
};

export function mockAppConfig() {
    return () => {
        AppConfig.settings = {
            env: { name: 'Unit Tests' },
            logging: { level: 7 }  // Set to level 0 to see debug logs
        } as IAppConfig;
    };
  }

export class MockOktaAuthService {
  $authenticationState: object;
  public isAuthenticated(): Promise<boolean> { return Promise.resolve(false);; }
  constructor() {
    this.$authenticationState = { subscribe() {} };
  }
}

export class MockUserService {
  get user(): Observable<User> { return of(null); }
}

export const initializeSettingsProvider = {
    provide: APP_INITIALIZER,
    useFactory: (mockAppConfig),
    deps: [ ], multi: true
};

export const mockDataServiceProviders = [
    { provide: APP_BASE_HREF, value: '/' },
    { provide: DataService, useClass: MockDataService },
    LoggingService,
    initializeSettingsProvider,
];
