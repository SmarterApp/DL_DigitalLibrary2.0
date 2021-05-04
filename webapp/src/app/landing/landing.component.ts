import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../data/resource/model/grade.model';
import { Subject } from '../data/resource/model/subject.model';
import { LandingPage } from '../data/landing/model/landingPage.model';
import { LandingService } from '../data/landing/landing.service';
import { AppConfig } from 'src/app/common/config/app.config';

const YT_MATCH_VID = /.*youtube.*v=([^&]+).*$|.*youtu.be\/([^&?]+).*$|.*youtube\/embed\/([^&?]+).*$/;

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
  landingType: string;
  resourceTypeSearch: string;
  title: string;
  grades: Grade[];
  subjects: Subject[];
  selectedGrade: string = "";
  selectedSubject: string = "";
  landingPage: LandingPage;
  interimItemPortalUrl = '#';
  youtubeVideoId: string = '';
  removeRightMarginSize = 1350;
  returnRightMarginSize = 1300;
  resizeTimeout;
  wasSmall: boolean;
  lastSize: number;
  filterLoading = false;

  constructor(
    private route: ActivatedRoute,
    private landingService: LandingService,
    private router: Router,
    @Inject('Window') private window: Window,
    ) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

  ngOnInit() {
    this.onResize();
    this.route.data.subscribe(data => {
      if (data.landing) {
        this.landingPage = data.landing;
        this.landingPage.howItHelpsSection.description = this.landingPage.howItHelpsSection.description.split('<li>').join('<li style="font-size: 1rem;">');
        this.youtubeVideoId = extractYouTubeVideoId(this.landingPage.marketingVideoLink);
      }
    });
    this.landingType = this.route.snapshot.paramMap.get('landingType');
    
    switch(this.landingType) { 
      case "playlist": { 
         this.resourceTypeSearch = "cp";
         this.title = "Interim Connections Playlists";
         this.loadDDL();
         break; 
      } 
      case "instructional": { 
        this.resourceTypeSearch = "ir";
        this.title = "Instructional Resources";
        this.loadDDL();
        break; 
      }       
      case "formative": { 
        this.resourceTypeSearch = "fs";
        this.title = "Formative Assessment Strategies";
        break; 
      }          
      case "accessibility": { 
        this.resourceTypeSearch = "as";
        this.title = "Accessibility Strategies";
        break; 
      }  
      case "professional": { 
        this.resourceTypeSearch = "pl";
        this.title = "Professional Learning Resources";
        break; 
      }        
      case "items": { 
        this.interimItemPortalUrl = AppConfig.settings.interimItemPortalUrl;
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
    this.filterLoading = true;
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    if (this.selectedGrade !== ""){
      params.grades = this.selectedGrade;
    }

    if (this.selectedSubject !== ""){
      params.subjects = this.selectedSubject;
    }
    this.router.navigate(['search', params]);
    this.filterLoading = false;
  }
  
  onFilterResourcesClick() {
    this.filterLoading = true;
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    this.router.navigate(['search', params]);
    this.filterLoading = false;
  }

  search(newParams: SearchQueryParams) {
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    params.query = newParams.query;
    this.router.navigate(['search', params]);
  }

  openInterimItems() {
    window.open(this.interimItemPortalUrl, "_blank");
  }

  login() {
    this.router.navigate(['/auth/login'], { queryParams: { redirectUrl: this.router.url }});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(this.doResize, 100);
  }

  doResize = () =>  {
    const isSmall = this.window.innerWidth < this.removeRightMarginSize;

    if (isSmall)
    {
        if (this.window.innerWidth > this.lastSize && this.window.innerWidth > this.returnRightMarginSize) {
          this.wasSmall = false;
          this.lastSize = this.window.innerWidth;
          return;
        }
    }
    this.wasSmall = isSmall;
    this.lastSize = this.window.innerWidth;
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
      { code: 'ela', shortName: 'ELA', fullName: 'English Language Arts' },
      { code: 'math', shortName: 'MATH', fullName: 'Mathematics' }];
  }
}

function extractYouTubeVideoId(url: string): string {
  const matches = url.match(YT_MATCH_VID);

  if (url.length > 0) {
    if (!matches) {
      throw new Error('Cannot extract video ID from unrecognized YouTube URL pattern:' + url);
    }
    return matches[1] || matches[2] || matches[3];
  }
  else {
    return '';
  }
}