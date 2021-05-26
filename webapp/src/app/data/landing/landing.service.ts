import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { LandingPage } from './model/landingPage.model';
import { api2pdfResponce } from './model/api2pdfResponce.model';
import { Observable, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  resourceCode: string;
  constructor(private dataService: DataService) { }

  get(landingType: string): Observable<LandingPage> {
    switch(landingType) {
      case "playlist": { 
        this.resourceCode = "cp";
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

  postapi2pdf(html: string, footer: string, filename: string) : Observable<any>{

    var payload = {
      "html": html,
      "inlinePdf": true,
      "fileName": filename,
      "options": {
        "displayHeaderFooter": true,
        "footerTemplate": footer
      }
    }; 

    // var payload = {
    //   "html": "<p>Hello World</p>"
    // };

    return this.dataService.postapi2pdf("", payload)
      .pipe(map(this.api2pdfResponceFromJson));;
  } 

  landingFromJson(landingJson: any): LandingPage {
    const testlanding  = landingJson;
    return {
      ...landingJson
    } as LandingPage;
  }

  api2pdfResponceFromJson(api2pdfResponceJson: any): api2pdfResponce {
    return {
      ...api2pdfResponceJson
    } as api2pdfResponce;
  }
} 
