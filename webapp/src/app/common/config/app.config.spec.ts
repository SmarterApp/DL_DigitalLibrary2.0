import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { AppConfig } from './app.config';

describe('AppConfig', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AppConfig ]
    });
    injector = getTestBed();
    service = injector.get(AppConfig);
    httpMock = injector.get(HttpTestingController);
  });

  it('should load valid settings', () => {
    const stubSettings = { env: { name: 'Test' } };

    service.load().then(() => {
      expect(AppConfig.settings.env.name).toBe('Test');
    });

    const request = httpMock.expectOne('assets/config/config.json');
    expect(request.request.method).toBe('GET');
    request.flush(stubSettings);
  });

  it('reject on error', () => {
    service.load().then(() => {
      expect(AppConfig.settings.env.name).toBe('Test');
    }).catch(err => {
      expect(err).toBe('Unable to load configurations from file \'assets/config/config.json\': Not Available');
    });

    const request = httpMock.expectOne('assets/config/config.json');
    expect(request.request.method).toBe('GET');
    request.error({ message: 'Not Available' } as ErrorEvent);
  });

  // After each, verifies there are no outstanding requests.
  afterEach(() => {
    httpMock.verify();
  });
});
