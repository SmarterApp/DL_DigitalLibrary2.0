import { TestBed } from '@angular/core/testing';
import { LoggingService } from './logging.service';
import { initializeSettingsProvider } from 'src/app/app.module.spec';

describe('LoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ initializeSettingsProvider ]
  }));

  it('should be created', () => {
    const service: LoggingService = TestBed.get(LoggingService);
    expect(service).toBeTruthy();
  });
});
