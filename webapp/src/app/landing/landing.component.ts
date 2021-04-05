import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../data/resource/model/grade.model';
import { Subject } from '../data/resource/model/subject.model';

@Component({
  selector: 'sbdl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  resourceType: string;
  resourceCode: string;
  title: string;
  grades: Grade[];
  subjects: Subject[];
  selectedGrade: string = "";
  selectedSubject: string = "";

  constructor(private route: ActivatedRoute,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.resourceType = this.route.snapshot.paramMap.get('resourceType');

    switch(this.resourceType) { 
      case "playlist": { 
         this.resourceCode = "ICP";
         this.title = "Interim Connections Playlists";
         break; 
      } 
      case "instructional": { 
        this.resourceCode = "IR";
        this.title = "Instructional Resources";
        break; 
      }       
      case "formative": { 
        this.resourceCode = "FASR";
        this.title = "Formative Assessment Strategies";
        break; 
      }          
      case "accessibility": { 
        this.resourceCode = "ASR";
        this.title = "Accessibility Instructional Strategies";
        break; 
      }  
      case "professional": { 
        this.resourceCode = "PLR";
        this.title = "Professional Learning Resources";
        break; 
      }        
      case "items": { 
        this.resourceCode = "IAIP";
        this.title = "Interim Assessment Item Portal";
        break; 
      }  

      default: { 

        // TODOJR: redirect to home page
        this.resourceCode = "NA";
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
