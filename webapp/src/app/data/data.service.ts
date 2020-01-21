/* tslint:disable:object-literal-key-quotes */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from '../common/config/app.config';

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

  private accessToken: string;
  private idToken: string;

  constructor(private httpService: HttpClient, private authService: OktaAuthService) {
    this.authService.$authenticationState.subscribe(
      async (hasAuth: boolean) => {
        if (hasAuth) {
          this.accessToken = await this.authService.getAccessToken();
        } else {
          this.accessToken = undefined;
        }
      });

    this.initAuth();
  }

  get(url: string, params?: any): Observable<any> {
    const fullUrl = AppConfig.settings.apiServerHost + url;
    const options = {
      headers: this.withAuth(new HttpHeaders({ ... jsonHeaders })),
      params
    };

    return this.httpService.get(fullUrl, options)
      .pipe(catchError(this.handleError));
  }

  post(url: string, obj: any, params?: any): Observable<any> {
    const fullUrl = AppConfig.settings.apiServerHost + url;
    const options = {
      headers: this.withAuth(new HttpHeaders({ ...jsonHeaders })),
      params
    };

    return this.httpService.post(fullUrl, obj, options)
      .pipe(catchError(this.handleError));
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

    if (url.includes(AppConfig.settings.apiServerHost)) {
      options.headers = this.withAuth(options.headers);
    }

    return this.httpService.get(url, options)
      .pipe(map(response => new Blob([ response ])))
      .pipe(catchError(this.handleError));
  }

  private async initAuth() {
    this.accessToken = await this.authService.getAccessToken();
    this.idToken = await this.authService.getIdToken();
  }

  private withAuth(headers: HttpHeaders) {
    if (this.accessToken) {
      return headers.set('Authorization', 'Bearer ' + this.accessToken);
    } else {
      return headers;
    }
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
