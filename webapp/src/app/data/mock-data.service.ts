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
  readonly mockGetDataEndpoints = [
    { pattern: /^\/userinfo$/, result: mockUser },
    { pattern: /\/resource\/0$/, result: mockApiResourceWithNulls },
    { pattern: /\/resource\/2$/, result: mockApiResource2 },
    { pattern: /\/resource\/[0-9]/, result: mockApiResource }
  ];

  readonly mockPostDataEndpoints = [
    { pattern: /^\/favorites\/resource$/, post: body => this.setFavorite(body) },
  ];

  readonly resources = [ mockApiResource, mockApiResource2 ];

  constructor(private logger: LoggingService) {
    this.logger.warn('Mock data service loaded.');
  }

  get(url: string, params?: any): Observable<any> {
    const mockedEndpoint = this.mockGetDataEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !=0 );

    if(mockedEndpoint && mockedEndpoint.result) {
      this.logger.debug(`Mocking API GET for ${url}`, mockedEndpoint.result);
      return of(mockedEndpoint.result);
    }

    return of(undefined);
  }

  post(url: string, obj: any): Observable<any> {
    const mockedEndpoint = this.mockPostDataEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !=0 );

    if(mockedEndpoint && mockedEndpoint.post) {
      this.logger.debug(`Mocking API POST for ${url}`, obj);
      return of(mockedEndpoint.post(obj));
    }

    return of(undefined);
  }

  downloadPdf(url: string): Observable<Blob> {
    throw new Error("Method not implemented.");
  }

  private setFavorite(object: any): any{
    const resource = this.resources.find(x => x.id === object.resourceId);
    if(resource) {
      resource.favorite = object.favorite;
    }
    return { 
      resourceId: resource.id,
      favorite: resource.favorite
    };
  }
}

