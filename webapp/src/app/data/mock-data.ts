import { APP_INITIALIZER } from '@angular/core';
import { AppConfig } from '../config/app.config';
import { IAppConfig } from '../config/config.model';

export const mockUser = {
    firstName: 'Mary',
    lastName: 'Anderson',
    tenantName: 'California'
};

export const mockRootActivatedRouteSnapshot = {
    snapshot: { data: { currentUser: mockUser } } 
};

export function mockAppConfig() {
    return () => {
        AppConfig.settings = <IAppConfig>{ 
            env: { name: 'Unit Tests' }, 
            logging: { level: 0 } 
        };
    }
  }

export const initializeSettingsProvider = { 
    provide: APP_INITIALIZER,
    useFactory: (mockAppConfig),
    deps: [ ], multi: true 
};