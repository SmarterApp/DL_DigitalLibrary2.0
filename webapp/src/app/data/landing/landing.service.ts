import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Landing } from './model/landing.model';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  landing: Landing;
  constructor(private dataService: DataService) { }

  // get = (resourceKey: string): Observable<Landing> => {
  //  TODOJR
  // };

  
}
