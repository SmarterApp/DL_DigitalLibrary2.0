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

  // TODO: Set and use CDL environment variable.
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

  downloadBlob(url: string, params?: any): Observable<Blob> {
    const fullUrl = AppConfig.settings.apiServer.cdl + url;
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/octet-stream',
        'Authorization': 'Bearer ' + AppConfig.settings.apiServer.authToken
      }),
      params,
      responseType : 'arraybuffer',
    } as any;

    return this.httpService.get(fullUrl, options)
      .pipe(map(response => new Blob([ response ])))
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
