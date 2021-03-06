/* tslint:disable:object-literal-key-quotes */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, throwError } from 'rxjs';
import { catchError, flatMap, map, take, tap } from 'rxjs/operators';
import { AppConfig } from '../common/config/app.config';
import { UserService } from './user/user.service';
import { User } from './user/user.model';

const jsonHeaders = {
  'Content-Type':  'application/json'
};

/**
 * Wrapper service for Angular's HttpClient.  As a best practice, we shouldn't ever use
 * HttpClient directly except for here, so that any future Angular HttpClient API changes
 * can be updated to this one spot.  This also allows us the opportunity add any generic,
 * Sbdl-specific logic in a single spot that should be applied across the board.
 *
 * TODO: Consider a refactor that removes the need for this class and uses an
 * HttpInterceptor instead to attach the auth token
 * (https://github.com/auth0/angular2-jwt#usage-injection for example is
 * available via the @auth0/angular-jwt library we already depend on).
 */
@Injectable()
export class DataService {

  /**
   * An operator that pulls the current user from the UserService and then
   * completes. We just want a single value representing the current user
   * session. The UserService.user observable will never complete on its own
   * (it's reacting to possible future login/out events) but most of our
   * callers (resolvers, etc) expect us to complete when we finish reading the
   * data they've requested.
   */
  private currentUser: Observable<User> = this.userService.user.pipe(take(1));

  constructor(
    private httpService: HttpClient,
    private userService: UserService) { }

  get(url: string, params?: any): Observable<any> {
    return this.makeOptions(url, params).pipe(
      flatMap(reqCtx => this.httpService.get(reqCtx.fullUrl, reqCtx.options)),
      catchError(this.handleError));
  }

  post(url: string, obj: any, params?: any): Observable<any> {
    return this.makeOptions(url, params).pipe(
      flatMap(reqCtx => this.httpService.post(reqCtx.fullUrl, obj, reqCtx.options)),
      catchError(this.handleError));
  }
  
  // This will do the actual post to the api2pdf site
  //    reqCtx.fullUrl will have the url from the consig settings
  //    obj: the payload (html, footer, file name and settings)
  //    reqCtx.options: the header options needed for the two types of call (Docker or api2pdf endpoint)
  postapi2pdf(url: string, obj: any): Observable<any> {
    return this.makeOptionsapi2pdf().pipe(
      flatMap(reqCtx => this.httpService.post(reqCtx.fullUrl, obj, reqCtx.options)),
      catchError(this.handleError));
  }
  
  delete(url: string, params?: any): Observable<any> {
    return this.makeOptions(url, params).pipe(
      flatMap(reqCtx => this.httpService.delete(reqCtx.fullUrl, reqCtx.options)),
      catchError(this.handleError));
  }

  downloadBlob(url: string, params?: any): Observable<Blob> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type':  'application/octet-stream' }),
      responseType : 'arraybuffer',
    } as any;

    return this.makeOptions(url, params, options).pipe(
      flatMap(reqCtx => this.httpService.get(reqCtx.fullUrl, reqCtx.options)),
      map(resp => new Blob([ resp ])),
      catchError(this.handleError));
  }

  private makeOptions(url: string, params?: any, customOptions?: any): Observable<RequestContext> {

    // If this is a relative URL, assume it is relative to the CDL API root.
    const apiBaseUrl = AppConfig.settings.apiServerHost;
    const fullUrl = url.includes('://') ? url : apiBaseUrl + url;

    const options = {
      headers: new HttpHeaders({...jsonHeaders}),
      params,
      ...(customOptions || {})
    };

    return this.currentUser.pipe(
      // Take the current user and combine it with the url to determine if we
      // need to add the `Authorization` header to our options.
      map(user => {
        const result = { fullUrl, options };

        if (fullUrl.includes(apiBaseUrl) && user) {
          result.options = {
            ...options,
            headers: options.headers.set('Authorization', 'Bearer ' + user.accessToken)
          };
        }

        return result;
      }));
  }

// This method will setup the request object to call api2pdf
// The config settings are in folder webapp\src\assets\config\
//    The URL is in the setting value for api2pdfHost
//    If Authorization is used (this would be for the actual api2pfd endpoint) the setting value is api2pdfAuthorization.
//      otherwise, it is ignored.
//      one more setting is used, api2pdfIsDockerVersion, if true, the docker image is used. False, the api2pdf end point
//        This is needed because the http headers and result are not the same.
private makeOptionsapi2pdf(): Observable<RequestContext> {

  // The endpoint url
  // api2pdf endpoint: https://v2018.api2pdf.com/chrome/html
  // docker image endpoint as of 6/2/2021: https://api2pdf-dev.dl.smarterbalanced.org/pdf/html
  // note: the end of the end points are not the same
  const fullUrl = AppConfig.settings.api2pdfHost;

  // The http header for the api2pdf endpoint
  // the response
  const options2WebService = {
    headers: new HttpHeaders({'Authorization': AppConfig.settings.api2pdfAuthorization, 
                              'binary': 'true'}),
  };

  // The http header for the docker endpoint
  const options2Docker = {
    headers: new HttpHeaders({'Authorization': AppConfig.settings.api2pdfAuthorization, 
                              'binary': 'true',
                              'Content-Type':  'application/octet-stream'}),
    responseType : 'arraybuffer',
  } as any;

  var options = AppConfig.settings.api2pdfIsDockerVersion ?  options2Docker : options2WebService;
  return this.currentUser.pipe(
    map(user => {
      const result = { fullUrl, options };
    return result;
      }));              
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

interface RequestContext {
  fullUrl: string;
  options: any;
}
