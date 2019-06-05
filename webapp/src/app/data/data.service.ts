
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const jsonContentType = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const pdfContentType = <any>{
  headers: new HttpHeaders({
    'Content-Type':  'application/pdf',
    Accept : 'application/pdf',
    observe : 'response'
  }),
  responseType : 'arraybuffer',
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
    return this.httpService.get(url, { ... jsonContentType, params: params })
      .pipe(
          catchError(this.handleError)
      );
  }

  downloadPdf(url: string) {  
    return this.httpService.get(url, pdfContentType)
      .pipe(map(response => new Blob([ response ], { type: 'application/pdf' })))
      .pipe(catchError(this.handleError));
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
