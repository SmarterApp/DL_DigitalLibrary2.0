import { APP_INITIALIZER } from '@angular/core';
import { AppConfig } from './common/config/app.config';
import { IAppConfig } from './common/config/config.model';
import { LoggingService } from './common/logging/logging.service';
import { DataService } from './data/data.service';
import { mockUser } from './data/mock-data';
import { MockDataService } from './data/mock-data.service';

// Common AppModule mocks here.
export const mockRootActivatedRouteSnapshot = {
    snapshot: { data: { currentUser: mockUser } } 
};

export function mockAppConfig() {
    return () => {
        AppConfig.settings = <IAppConfig>{ 
            env: { name: 'Unit Tests' }, 
            logging: { level: 7 }  // Set to level 0 to see debug logs
        };
    }
  }

export const initializeSettingsProvider = { 
    provide: APP_INITIALIZER,
    useFactory: (mockAppConfig),
    deps: [ ], multi: true 
};

export const mockDataServiceProviders = [ 
    { provide: DataService, useClass: MockDataService }, 
    LoggingService, 
    initializeSettingsProvider 
];
  