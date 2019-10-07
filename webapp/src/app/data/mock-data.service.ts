import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { LoggingService } from '../common/logging/logging.service';
import { DataService } from './data.service';
import {
  mockAccessibilityStrategy, mockApiResource, mockApiResource2,
  mockApiResourceWithNulls,
  mockDocument52, mockDocument53, mockDocument54, mockDocument55,
  mockFormativeStrategy,
  mockPlaylistResource,
  mockProfessionalResource,
  mockUser, mockSearchFilters, mockMathClaims, mockElaClaims,
  // demo content
  mockIrAllSystemsGo, mockIrGrainOfSandDropOfWater, mockIrAnyWayYouSliceIt,
  mockIrSearchingForRelevantResources, mockIrIntroToQuadFormula
} from './mock-data';

// Work around for:
// https://stackoverflow.com/questions/48953587/typescript-class-implements-class-with-private-functions
// tldr; We can't implement a class with privates, so we need a wrapper type to pull out the publics.
type PublicPart<T> = {[K in keyof T]: T[K]};

@Injectable()
export class MockDataService implements PublicPart<DataService> {
  readonly mockGetDataEndpoints = [
    { pattern: /^\/userinfo$/, result: mockUser },
    { pattern: /\/resources\/0$/, result: mockApiResourceWithNulls },
    { pattern: /\/resources\/2$/, result: mockApiResource2 },
    { pattern: /\/resources\/3$/, result: mockProfessionalResource },
    { pattern: /\/resources\/4$/, result: mockAccessibilityStrategy },
    { pattern: /\/resources\/5$/, result: mockFormativeStrategy },
    { pattern: /\/resources\/6$/, result: mockPlaylistResource },
    { pattern: /\/resources\/7$/, result: mockIrAllSystemsGo },
    { pattern: /\/resources\/8$/, result: mockIrGrainOfSandDropOfWater },
    { pattern: /\/resources\/9$/, result: mockIrAnyWayYouSliceIt },
    { pattern: /\/resources\/10$/, result: mockIrSearchingForRelevantResources },
    { pattern: /\/resources\/11$/, result: mockIrIntroToQuadFormula },
    { pattern: /\/resources\/[0-9]/, result: mockApiResource },
    { pattern: /\/file_documents\/52/, result: mockDocument52 },
    { pattern: /\/file_documents\/53/, result: mockDocument53 },
    { pattern: /\/file_documents\/54/, result: mockDocument54 },
    { pattern: /\/file_documents\/55/, result: mockDocument55 },
    { pattern: /\/search\/filters/, result: mockSearchFilters }
  ];

  readonly mockPostDataEndpoints = [
    { pattern: /^\/favorites\/resource$/, post: body => this.setFavorite(body) },
    { pattern: /^\/search/, post: body => this.postSearch(body) }
  ];

  readonly mockDownloadEndpoints = [
    { pattern: /\/file_documents\/52/, result: '/assets/mock-downloads/SBAC Running Record Analysis.pdf' },
    { pattern: /\/file_documents\/53/, result: '/assets/mock-downloads/note_taking.docx' },
    { pattern: /\/file_documents\/[0-9]*/, result: '/assets/mock-downloads/video-game-credits.pdf' }
  ];

  readonly resources = [ mockApiResource, mockApiResource2 ];

  constructor(private logger: LoggingService) {
    this.logger.warn('Mock data service loaded.');
  }

  get(url: string, params?: any): Observable<any> {
    const mockedEndpoint = this.mockGetDataEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !== 0);

    if (mockedEndpoint && mockedEndpoint.result) {
      this.logger.debug(`Mocking API GET for ${url}`, mockedEndpoint.result);
      return of(mockedEndpoint.result);
    }

    return of(undefined);
  }

  post(url: string, obj: any): Observable<any> {
    const mockedEndpoint = this.mockPostDataEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !== 0);

    if (mockedEndpoint && mockedEndpoint.post) {
      this.logger.debug(`Mocking API POST for ${url}`, obj);
      return of(mockedEndpoint.post(obj)).pipe(delay(500));
    }

    return of(undefined);
  }

  downloadBlob(url: string): Observable<Blob> {
    // Don't want to inject httpClient in a mock data service which shouldn't be using one, but downlaoding from our assets
    // folder is an exception which won't be used in unit tests, only in standalone mode.
    const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    const mockedEndpoint = this.mockDownloadEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !== 0);
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/octet-stream',
      }),
      responseType : 'arraybuffer',
    } as any;

    return httpClient
      .get(mockedEndpoint.result, options)
      .pipe(map(response => new Blob([ response ])));
  }

  private postSearch(object: any): any {
    const claims = object.subjects && object.subjects.indexOf('math') !== -1
      ? [ ...mockMathClaims ]
      : [ ];

    if (object.subjects.indexOf('ela') !== -1) { claims.push(...mockElaClaims); }

    return {
      filters: { ... mockSearchFilters, claims },
      results: this.shuffleArray([
          mockApiResource,
          mockApiResource2,
          mockProfessionalResource,
          mockPlaylistResource,
          mockFormativeStrategy,
          mockAccessibilityStrategy
        ])// Randomize the results to simulate different searches on subsequent calls
        .splice(0, Math.floor(Math.random() * 5) + 1)
    };
  }

  private setFavorite(object: any): any {

    const resource = this.resources.find(x => x.id === object.resourceId);
    if (resource) {
      resource.favorite = object.favorite;
      return {
        resourceId: resource.id,
        favorite: resource.favorite
      };
    }

    return throwError('who knows');
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
}

