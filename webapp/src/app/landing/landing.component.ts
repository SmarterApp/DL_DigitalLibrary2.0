import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../data/resource/model/grade.model';
import { Subject } from '../data/resource/model/subject.model';
import { LandingPage } from '../data/landing/model/landingPage.model';
import { LandingService } from '../data/landing/landing.service';
import { LANDINGPAGE_OBJECT } from '../data/landing/mockdata';

export class SearchQueryParams {
  query?: string;
  claims?: string;
  grades?: string;
  subjects?: string;
  targets?: string;
  standards?: string;
  resourceTypes?: string;
}

@Component({
  selector: 'sbdl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  params: SearchQueryParams;
  resourceType: string;
  resourceTypeSearch: string;
  resourceCode: string;
  title: string;
  grades: Grade[];
  subjects: Subject[];
  selectedGrade: string = "";
  selectedSubject: string = "";
  landingPage: LandingPage;
  private filterResourcesClicked: boolean;

  constructor(private route: ActivatedRoute,
    private landingService: LandingService,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.resourceType = this.route.snapshot.paramMap.get('resourceType');
    this.landingPage = LANDINGPAGE_OBJECT;
    
    switch(this.resourceType) { 
      case "playlist": { 
         this.resourceCode = "ICP";
         this.resourceTypeSearch = "cp";
         this.title = "Interim Connections Playlists";
         this.loadDDL();
         break; 
      } 
      case "instructional": { 
        this.resourceCode = "ir";
        this.resourceTypeSearch = "ir";
        this.title = "Instructional Resources";
        this.loadDDL();
        break; 
      }       
      case "formative": { 
        this.resourceCode = "FASR";
        this.resourceTypeSearch = "fs";
        this.title = "Formative Assessment Strategies";
        break; 
      }          
      case "accessibility": { 
        this.resourceCode = "ASR";
        this.resourceTypeSearch = "as";
        this.title = "Accessibility Instructional Strategies";
        break; 
      }  
      case "professional": { 
        this.resourceCode = "PLR";
        this.resourceTypeSearch = "pl";
        this.title = "Professional Learning Resources";
        break; 
      }        
      case "items": { 
        this.resourceCode = "IAIP";
        this.title = "Interim Assessment Item Portal";
        this.resourceTypeSearch = "";
        break; 
      }  

      default: { 
        this.router.navigate(['']);
        break; 
      } 
   } 
  }

  onFilterResourcesSubjectAndGradeClick()
  {
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    if (this.selectedGrade !== ""){
      params.grades = this.selectedGrade;
    }

    if (this.selectedSubject !== ""){
      params.subjects = this.selectedSubject;
    }
    this.router.navigate(['search', params]);
  }
  
  onFilterResourcesClick() {
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    this.router.navigate(['search', params]);
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