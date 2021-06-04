import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { LandingPage } from './model/landingPage.model';
import { api2pdfResponse } from './model/api2pdfResponse.model';
import { Observable, of, ReplaySubject } from 'rxjs';
import { AppConfig } from 'src/app/common/config/app.config';

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
  
    return this.dataService
        .get(`/api/landing_page/${this.resourceCode}`)
        .pipe(map(this.landingFromJson));
  }

  
  // This will setup the payload and the header options
  // Note: to support creating a pdf from html, api2pdf only has a post available 
  postapi2pdf(html: string, footer: string, filename: string) : Observable<any>{

    // create the payload object
    // see these for more info on payload options:
    // https://app.swaggerhub.com/apis-docs/api2pdf/api2pdf/1.0.0#/Headless%20Chrome/chromeFromHtmlPost
    // https://www.api2pdf.com/documentation/advanced-options-headless-chrome/
    var payload = {
      "html": html,
      "inlinePdf": true,
      "fileName": filename,
      "options": {
        "displayHeaderFooter": true,
        "footerTemplate": footer
      }
    }; 

    // Test to see if using Docker or api2pdf endpoint
    // The response is not the same
    // Docker: returns a file stream
    if (AppConfig.settings.api2pdfIsDockerVersion) {
      return this.dataService.postapi2pdf("",payload);
    }
    
    // api2pdf endpoint: returns json and will populate the object api2pdfResponse
    else {
      return this.dataService.postapi2pdf("", payload)
        .pipe(map(this.api2pdfResponseFromJson));
    }
  } 

  landingFromJson(landingJson: any): LandingPage {
    return {
      ...landingJson
    } as LandingPage;
  }

  api2pdfResponseFromJson(api2pdfResponseJson: any): api2pdfResponse {
    return {
      ...api2pdfResponseJson
    } as api2pdfResponse;
  }
} 
