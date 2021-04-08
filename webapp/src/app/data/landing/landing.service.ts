import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { LandingPage } from './model/landingPage.model';
import { TaglineSection } from './model/taglineSection.model';
import { HowItHelpsSection } from './model/howItHelpsSection.model';
import { CallToActionSection } from './model/callToActionSection.model';
import { HowToUseSection } from './model/howToUseSection.model';
import { DiveDeeperSection } from './model/diveDeeperSection.model';
import { SampleSection } from './model/sampleSection.model';
import { Observable, of, ReplaySubject } from 'rxjs';
import {LANDINGPAGE_OBJECT} from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private dataService: DataService) { }

  // get() { //: Observable<LandingPage> {
  //   // return this.dataService
  //   //   .get('/api/landing')
  //   //   .pipe(map(resp => resp.bookmarks.map(this.bookmarkFromJson)));

    get(): Observable<LandingPage> {
      console.log(LANDINGPAGE_OBJECT);
      //return of();
      return of(null);
    }
  
} 


// export const landingPageContent: LandingPage = {
//   type: 'pl',
//   taglineSection: {
//     header: "Strengthen your teaching practice by growing your expertise",
//     "Strengthen your teaching practice by growing your expertise",
//   },
//   // howItHelpsSection
//   // callToActionSection
//   // howToUseSection
//   // diveDeeperSection
//   // sampleSection
//   marketingGraphicUri: '',
//   marketingVideoLink: ''
// }
