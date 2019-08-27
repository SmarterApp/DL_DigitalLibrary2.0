import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { LoggingService } from '../common/logging/logging.service';
import { DataService } from './data.service';
import { mockApiResource, mockApiResource2, mockApiResourceWithNulls, mockDocument52, mockDocument53, mockUser, mockProfessionalResource, mockDocument54, mockDocument55, mockApiAccessStrategyResource } from './mock-data';
import { HttpHeaders, HttpClient, HttpXhrBackend } from '@angular/common/http';

// Work around for: 
// https://stackoverflow.com/questions/48953587/typescript-class-implements-class-with-private-functions
// tldr; We can't implement a class with privates, so we need a wrapper type to pull out the publics.
type PublicPart<T> = {[K in keyof T]: T[K]}

@Injectable()
export class MockDataService implements PublicPart<DataService> {
  readonly mockGetDataEndpoints = [
    { pattern: /^\/userinfo$/, result: mockUser },
    { pattern: /\/resources\/0$/, result: mockApiResourceWithNulls },
    { pattern: /\/resources\/2$/, result: mockApiResource2 },
    { pattern: /\/resources\/3$/, result: mockProfessionalResource },
    { pattern: /\/resources\/4$/, result: mockApiAccessStrategyResource },
    { pattern: /\/resources\/[0-9]/, result: mockApiResource },
    { pattern: /\/file_documents\/52/, result: mockDocument52 },
    { pattern: /\/file_documents\/53/, result: mockDocument53 },
    { pattern: /\/file_documents\/54/, result: mockDocument54 },
    { pattern: /\/file_documents\/55/, result: mockDocument55 }
  ];

  readonly mockPostDataEndpoints = [
    { pattern: /^\/favorites\/resource$/, post: body => this.setFavorite(body) },
  ];

  readonly mockDownloadEndpoints = [
    { pattern: /\/file_documents\/52/, result: '/assets/mock-downloads/SBAC Running Record Analysis.pdf' },
    { pattern: /\/file_documents\/53/, result: '/assets/mock-downloads/note_taking.docx' },
    { pattern: /\/file_documents\/[0-9]*/, result: '/assets/mock-downloads/video-game-credits.pdf' }
  ]

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
      return of(mockedEndpoint.post(obj)).pipe(delay(500));
    }

    return of(undefined);
  }

  downloadBlob(url: string): Observable<Blob> {
    // Don't want to inject httpClient in a mock data service which shouldn't be using one, but downlaoding from our assets
    // folder is an exception which won't be used in unit tests, only in standalone mode.
    const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    const mockedEndpoint = this.mockDownloadEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !=0 );
    const options = <any>{
      headers: new HttpHeaders({
        'Content-Type':  'application/octet-stream',
      }),
      responseType : 'arraybuffer',
    };

    return httpClient
      .get(mockedEndpoint.result, options)
      .pipe(map(response => new Blob([ response ])));
  }

  private setFavorite(object: any): any{
    
    const resource = this.resources.find(x => x.id === object.resourceId);
    if(resource) {
      resource.favorite = object.favorite;
      return { 
        resourceId: resource.id,
        favorite: resource.favorite
      };
    }

    return throwError('who knows');
  }
}

