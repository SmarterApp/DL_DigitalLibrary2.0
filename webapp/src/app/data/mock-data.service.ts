import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';

// wWrk around for: 
// https://stackoverflow.com/questions/48953587/typescript-class-implements-class-with-private-functions
// tldr; We can't implement a class with privates, so we need a wrapper type to pull out the publics.
type PublicPart<T> = {[K in keyof T]: T[K]}

@Injectable()
export class MockDataService implements PublicPart<DataService> {
  constructor() {
    console.log('mock data service used.');
  }

  get(url: string, params?: any): Observable<any> {
    return of('test');
  }

  downloadPdf(url: string): Observable<Blob> {
    throw new Error("Method not implemented.");
  }
}
