/* tslint:disable:object-literal-key-quotes */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from '../common/config/app.config';

const jsonContentType = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const jsonHeaders = {
  'Content-Type':  'application/json'
};

/**
 * Wrapper service for Angular's HttpClient.  As a best practice, we shouldn't ever use
 * HttpClient directly except for here, so that any future Angular HttpClient API changes
 * can be updated to this one spot.  This also allows us the opportunity add any generic,
 * Sbdl-specific logic in a single spot that should be applied across the board.
 */
@Injectable()
export class DataService {

  constructor(private httpService: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    const fullUrl = AppConfig.settings.apiServer.cdl + url;
    const options = {
      headers: new HttpHeaders({
        ... jsonHeaders,
        'Authorization': 'Bearer ' + AppConfig.settings.apiServer.authToken
      }),
      params
    };

    return this.httpService.get(fullUrl, options)
      .pipe(
          catchError(this.handleError)
      );
  }

  post(url: string, obj: any, params?: any): Observable<any> {
    const fullUrl = AppConfig.settings.apiServer.cdl + url;
    const options = {
      headers: new HttpHeaders({
        ...jsonHeaders,
        'Authorization': 'Bearer ' + AppConfig.settings.apiServer.authToken
      }),
      params
    };
    return this.httpService.post(fullUrl, obj, options)
      .pipe(
          catchError(this.handleError)
      );
  }

  /**
   * Unlike the other methods on DataService, this does not treat all URLs as
   * being relative to the CDL API root. URLs given here are treated as they
   * would be in the `href` attribute of an anchor tag. In cases where the URL
   * does point at the API we do add the appropriate authentication header.
   */
  downloadBlob(url: string, params?: any): Observable<Blob> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/octet-stream'
      }),
      params,
      responseType : 'arraybuffer',
    } as any;

    if (url.includes(AppConfig.settings.apiServer.cdl)) {
      options.headers.set('Authorization', 'Bearer ' + AppConfig.settings.apiServer.authToken);
    }

    return this.httpService.get(url, options)
      .pipe(map(response => new Blob([ response ])))
      .pipe(
          catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // TODO: Log somewhere?
    // return an ErrorObservable with a user-facing error message
    return throwError(error);
  }
}
