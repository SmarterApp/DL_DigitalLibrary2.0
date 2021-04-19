import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Map } from 'immutable';
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
  resourceCode: string;
  constructor(private dataService: DataService) { }

  get(resourceType: string): Observable<LandingPage> {
    switch(resourceType) {
      case "playlist": { 
        this.resourceCode = "pl";
        break; 
     } 
     case "instructional": { 
      this.resourceCode = "ir";
      break; 
    }       
    case "formative": { 
      this.resourceCode = "fs";
      break; 
    }          
    case "accessibility": { 
      this.resourceCode = "as";
      break; 
    }  
    case "professional": { 
      this.resourceCode = "pl";
      break; 
    }        
    case "items": { 
      this.resourceCode = "iaip";
      break; 
    }  

  }

    const testlanding  = this.dataService
      .get(`/api/landing_page/${this.resourceCode}`)
      .pipe(map(this.landingFromJson));
      return testlanding;
  }

  landingFromJson(landingJson: any): LandingPage {
    const testlanding  = landingJson;
    return {
      ...landingJson
    } as LandingPage;
  }
} 
