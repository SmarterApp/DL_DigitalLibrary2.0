import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../data/resource/model/grade.model';
import { Subject } from '../data/resource/model/subject.model';
import {Subscription} from 'rxjs';
import { LandingPage } from '../data/landing/model/landingPage.model';
import { LandingService } from '../data/landing/landing.service';

@Component({
  selector: 'sbdl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  resourceType: string;
  title: string;
  grades: Grade[];
  subjects: Subject[];
  selectedGrade: string = "";
  selectedSubject: string = "";
  landingPage: LandingPage;

  json: string;
  constructor(private route: ActivatedRoute,
    private landingService: LandingService,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.landing) {
        this.json = JSON.stringify(data.landing);
        this.landingPage = data.landing;
        console.log(this.landingPage);
      }
    });
    const routeParams = this.route.snapshot.paramMap;
    this.resourceType = this.route.snapshot.paramMap.get('resourceType');

    switch(this.resourceType) { 
      case "playlist": { 
         this.title = "Interim Connections Playlists";
         break; 
      } 
      case "instructional": { 
        this.title = "Instructional Resources";
        break; 
      }       
      case "formative": { 
        this.title = "Formative Assessment Strategies";
        break; 
      }          
      case "accessibility": { 
        this.title = "Accessibility Instructional Strategies";
        break; 
      }  
      case "professional": { 
        this.title = "Professional Learning Resources";
        break; 
      }        
      case "items": { 
        this.title = "Interim Assessment Item Portal";
        break; 
      }  

      default: { 

        // TODOJR: redirect to home page
        this.title = "UnKnown";
        break; 
      } 
   } 

  }
  
  loadDDL() {
    this.grades = [
      { code: 'g3', shortName: '3', longName: 'Grade 3' },
      { code: 'g4', shortName: '4', longName: 'Grade 4' },
      { code: 'g5', shortName: '5', longName: 'Grade 5' },
      { code: 'g6', shortName: '6', longName: 'Grade 6' },
      { code: 'g7', shortName: '7', longName: 'Grade 7' },
      { code: 'g8', shortName: '8', longName: 'Grade 8' },
      { code: 'ghs', shortName: 'HS', longName: 'High School' }];

    this.subjects = [
      { code: 'ela', shortName: 'eng', fullName: 'English Language Arts' },
      { code: 'math', shortName: 'math', fullName: 'Mathematics' }];
  }
}
