import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { LoggingService } from '../common/logging/logging.service';
import { DataService } from './data.service';
import { mockUser } from './mock-data';

// Work around for:
// https://stackoverflow.com/questions/48953587/typescript-class-implements-class-with-private-functions
// tldr; We can't implement a class with privates, so we need a wrapper type to pull out the publics.
type PublicPart<T> = {[K in keyof T]: T[K]};

@Injectable()
export class MockDataService implements PublicPart<DataService> {
  readonly mockGetDataEndpoints = [
    { pattern: /^\/userinfo$/, result: mockUser },
  ];

  readonly mockDownloadEndpoints = [
    { pattern: /\/file_documents\/52/, result: '/assets/mock-downloads/SBAC Running Record Analysis.pdf' },
    { pattern: /\/file_documents\/53/, result: '/assets/mock-downloads/note_taking.docx' },
    { pattern: /\/file_documents\/[0-9]*/, result: '/assets/mock-downloads/video-game-credits.pdf' }
  ];

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
    return of(undefined);
  }

  postapi2pdf(url: string, obj: any): Observable<any> {
    return of(undefined);
  }

  delete(url: string, params?: any): Observable<any> {
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
