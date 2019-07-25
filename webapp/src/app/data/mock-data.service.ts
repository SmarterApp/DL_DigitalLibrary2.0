import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggingService } from '../common/logging/logging.service';
import { DataService } from './data.service';
import { mockApiResource, mockUser, mockApiResourceWithNulls, mockApiResource2 } from './mock-data';

// Work around for: 
// https://stackoverflow.com/questions/48953587/typescript-class-implements-class-with-private-functions
// tldr; We can't implement a class with privates, so we need a wrapper type to pull out the publics.
type PublicPart<T> = {[K in keyof T]: T[K]}

@Injectable()
export class MockDataService implements PublicPart<DataService> {
  readonly mockDataEndpoints = [
    { pattern: /^\/userinfo$/, result: mockUser },
    { pattern: /\/resource\/0$/, result: mockApiResourceWithNulls },
    { pattern: /\/resource\/2$/, result: mockApiResource2 },
    { pattern: /\/resource\/[0-9]/, result: mockApiResource }
  ];

  constructor(private logger: LoggingService) {
    this.logger.warn('Mock data service loaded.');
  }

  get(url: string, params?: any): Observable<any> {
    const mockedEndpoint = this.mockDataEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !=0 );

    if(mockedEndpoint && mockedEndpoint.result) {
      this.logger.debug(`Mocking API call for ${url}`, mockedEndpoint.result);
      return of(mockedEndpoint.result);
    }

    return of(undefined);
  }

  downloadPdf(url: string): Observable<Blob> {
    throw new Error("Method not implemented.");
  }
}

