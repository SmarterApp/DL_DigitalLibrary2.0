import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Landing } from './model/landing.model';

// TODOJR: will need to remove
import { HttpClient } from '@angular/common/http';
import { MockDataService } from '../mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  url: string = 'http://localhost:3000/landing';
  mockDataService: MockDataService 
  landings: Observable<Landing>;


  constructor(private dataService: DataService,
    private http: HttpClient) { }

    
  get = (resourceKey: string): Observable<Landing> => {
    this.landings = this.mockDataService.get(this.url, resourceKey)
    return this.landings[0];
    }
  
}
