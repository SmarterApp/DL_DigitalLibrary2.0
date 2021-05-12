import { Component, HostListener, Inject, OnInit, AfterViewInit, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../data/resource/model/grade.model';
import { Subject } from '../data/resource/model/subject.model';
import { LandingPage } from '../data/landing/model/landingPage.model';
import { LandingService } from '../data/landing/landing.service';
import { AppConfig } from 'src/app/common/config/app.config';
import {ViewChild} from '@angular/core'
import { stringify } from '@angular/compiler/src/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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
  removeRightMarginSize = 1300;
  returnRightMarginSize = 1100;
  resizeTimeout;
  wasSmall: boolean;
  lastSize: number;
  filterLoading = false;
  urlHome: string = 'https://qa.webapp.dl.smarterbalanced.org';

  @ViewChild("LandingPage", { static: false }) lp: ElementRef;

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
    const isSmall = this.window.innerWidth <= this.removeRightMarginSize;

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

  ngAfterViewInit() {
    const before = "" +
    "<!DOCTYPE html> " +
    "<html>" +
      "<head>" + this.getStyles() +
      "<table class='pageMargin'><tbody>" + 
        "<tr>" + this.getHeader() + "</tr>" +
        "<tr>" + this.getTitle() + "</tr>" +
        "<tr>" + this.getTagLine() + "</tr>" +
        "<tr>" + this.getHowWillItHelp() + "</tr>" +
        "<tr>" + this.getStartUsing() + "</tr>" +
      "</tbody></table>" +
        //this.getPage1() +
        
        "<div style ='display:block; clear:both; page-break-before:always;'>" +
        "</div>" +
        "<table class='pageMargin'><tbody>" + 
         this.getHowCanIUse() +
         this.getRightSide() +
        "</tbody></table>";
        // this.getPage2() +
    const after = '</body>    </html>';
    //const image = '<img src="https://qa.webapp.dl.smarterbalanced.org/assets/svg/tft-logo-full.svg">'
    //const body = this.lp.nativeElement.innerHTML;
    //const body = '<h5>' + this.landingPage.taglineSection.header + '</h5>'
    console.log(before +  after);
    //this.text.nativeElement.focus();
  }

  getStyles(): string {
    return "" +
    "<link href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Open+Sans:300,400,600,700&display=swap' rel='stylesheet'/>" +
    "<style> " +
    ".pageMargin {margin: 12px;margin-top: 25px;margin-left: 17px;width: 100%;max-width: 840px;}" +
    ".T4TImage {height: 90px;}" +
    ".headerImage {width: 50px;margin-right: 15px;}" +
    ".headerBorder {width: 33%;border-right: 2px solid lightgray;}" +
    ".headerLink {margin-left: 20px;font-family: Montserrat;font-style: normal;text-decoration: none;color: black;}" +
    "h1 {color: #3C8517;font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 36px;line-height: 100%;margin-top: 20px;margin-bottom: 15px;}" +
    "h2 {font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 20px;line-height: 120%;margin: 0px;margin-top: 1.0rem;}" +
    ".tagLineText {font-family: Open Sans;font-style: normal;font-weight: normal;font-size: 16px;line-height: 140%;margin: 0px;padding: 0px;vertical-align: text-bottom;padding-top: 5px;}" +
    ".lpImage {height: 225px;width: 225px;}" +
    ".shadow {box-shadow: 0 1px 8px rgb(0 0 0 / 20%), 0 3px 4px rgb(0 0 0 / 12%), 0 3px 3px rgb(0 0 0 / 14%); border-radius: 4px; margin: 1.5rem;}" +
    ".SBImage {width: 79px;height: 21px;}" +
    ".footer {position:fixed;bottom:0px;left:0px;width:100%;color:#CCC;background:#333;padding:8px;}"+
    ".bold {font-weight: bold;}" +
    ".colorGreen {color: #3C8517;}" +
    "li {max-width: 90%;}" + 
    ".callToActionBackground {background-color: #e0f7ff;padding: 15px;border-radius: 15px;max-width: 93%;}" +
    ".callToActionButton {margin-left: 50px;color: white;background-color: #0080A7;padding: 20px;border-radius: 15px;max-width: 65%;" +
                        "font-family: Open Sans;font-style: normal;font-weight: 600;font-size: 16px;line-height: 110%;" + 
                        "display: flex;align-items: center;text-transform: uppercase;width: 200px;}" +
    "a.button {-webkit-appearance: button;-moz-appearance: button;appearance: button;text-decoration: none;}" +
    "hr {background-color: lightgray;border: none;height: 2px;max-width: unset;width: 100%;margin: 0px;margin-top: 15px;margin-bottom: 15px;}" +
    "</style>";
  }

  getHeader(): string {
    return "" +
      "<td class='headerBorder'>" +
      "<img class='T4TImage' src='" + this.urlHome + "/assets/svg/tft-logo-full.svg'>" +
      "</td><td>" +
      "<a class='headerLink' href='" + this.urlHome + "/landing/" + this.landingType + "'" +
      "target='blank'>SmarterToolsForTeachers.org/" + this.landingType + "</a>" +
      "</td>";
  } 

  getTitle() : string {
    return "" +
    "<td colspan=2>" +
    "<h1>" +
    "<img class='headerImage' src='https://qa.webapp.dl.smarterbalanced.org/assets/images/instructional-resource.png'>" +
    this.title + 
    "</h1></td>";
  }

  getTagLine(): string {
    return "" +
    "<td colspan=2>" +
    "<table style='width:100%;'><tbody>" +
      "<tr>" +
        "<td style='width:75%;'>" +
          "<h2>" + this.landingPage.taglineSection.header + "</h2>" +
        "</td>" +
        "<td rowspan=2 style='width:25%;'>" + "<img class='lpImage shadow' src='" + this.landingPage.marketingGraphicUri  + "'>" + "</td>" +
      "</tr>" +
      "<tr><td class='tagLineText'>" + this.landingPage.taglineSection.description + "</td></tr>" +
    "</tbody></table>" + 
    "</td>";
  }

  getHowWillItHelp(): string {
    return "" +
    "<td colspan=2 class='tagLineText' style='width:100%;'>" +
    "<h2 class='bold'>How will they help me?</h2>" + 
    "<div style='margin-left: -15px;width:100%;'>" + this.landingPage.howItHelpsSection.description.replace("<ul>", "<ul style='width: 100%;'>") + "</div>" +
    "</td>";
  }

  getStartUsing (): string {
    return "" +
    "<td colspan=2>" +
    "<div class='callToActionBackground'>" +
    "<table style='width: 100%;'><tr><td>" +
      "<h2 style='margin-top: 0px'>" + this.landingPage.callToActionSection.header + "</h2>" +
      //"<br/>" +
      "<p class='tagLineText'>" + this.title + " are available exclusively on Tools for Teachers.  Login to find and access resources." + "</p>" + 
    "</td>" + 
    "<td>" +
    "<a class='callToActionButton button' href='" + this.urlHome + "/landing/" + this.landingType + "'" +
    "target='blank'>GO TO TOOLS<br>FOR TEACHERS" +
    
    "<svg xmlns='http://www.w3.org/2000/svg' style='margin-left: 15px' width='40' height='40' fill='currentColor' class='bi bi-arrow-right' viewBox='0 0 16 16'> " +
       "<path fill-rule='evenodd' d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'/>  </svg>" +

    "</a></td>" + 
    "</tr>" +
    "</table>" +
    "</div>" +
    "</td>";
  }

  getPage1 (): string {
    return "" +
    "<div class='footer'><table>" +
    "<tr>" +
    "<td>Page 1 of 2</td>" + 
    "<td> <img class='SBImage' src='http://localhost:4200/assets/images/SmarterBalanced_Logo_Horizontal_Color.png'>"+
    "copyright</td>" +
    "</tr>" +
    "</table></div>";
  }

  getHowCanIUse (): string {
    return "" +
    "<tr><td colspan=2>" +
    "<h2 class='bold'>" + this.landingPage.howToUseSection.header + "</h2>" +
    this.getHowCanIUseGetItems() +
    "</td></tr>";
  }
  
  getHowCanIUseGetItems(): string {
    var value = "";
    var image = "";
    for (let i = 0; i < this.landingPage.howToUseSection.subSections.length; i++) {

      if (((i+1) % 3) === 1) {
        image = "yellow-spot-4.png";
      }
      else if (((i+1) % 3) === 2) {
        image = "green-spot-3.png";
      }
      else {
        image = "blue-spot.png";
      }

      value = value + "<tr><td rowspan=2 style='vertical-align: top;'>" +
      "<img style='height: 36px;margin-top: 10px;margin-right: 15px;' src='" + this.urlHome + "/assets/images/" + image + "'>" +
      "</td><td><h2>" + this.landingPage.howToUseSection.subSections[i].title +"</h2>" + 
        "</td></tr>" +
        "<tr><td>" +
        "<p class='tagLineText'>" + this.landingPage.howToUseSection.subSections[i].description + "</p>" +
        "</td></tr>";
    }

    return value;
  }


  getRightSide (): string {
    return "" +
    "<tr><td colspan=2>" +
    "<table style='width: 100%'>" + 
    "<tr><td colspan=2><hr></td></tr>" +
    "<tr style='vertical-align: top;'>" + 
    "<td style='width: 50%'>" + this.getRightSideSamplePlaylist() + "</td>" +
    "<td style='width: 50%'>" + this.getRightSideSampleDiveDeeper() + "</td>" +
    "</tr></table>" + 
    "</td></tr>";
  }

  getRightSideSamplePlaylist (): string {
    return "<table><tr><td><h2 class='bold colorGreen'>" + "Sample Playlist" + "</h2></td></tr>" + 
    "<tr><td><p class='tagLineText'>Access these samples without needing to log into the site.</p></tr></td>" +
    this.getRightSideSamplePlaylistItems() +
    "</table>";
  }

  getRightSideSamplePlaylistItems(): string {
    var value = "";
    var urlValue = "";

    for (let i = 0; i < this.landingPage.sampleSections.sampleResources.length; i++) {
      value = value + "<tr><td>" +
      "<br><a href='" + this.urlHome + "/resource/" + this.landingPage.sampleSections.sampleResources[i].id + "'" +
      "target='blank'>"  + this.landingPage.sampleSections.sampleResources[i].title + "</a>" +
      "<br><p style='margin: 0px;'>" + this.landingPage.sampleSections.sampleResources[i].detail + "</p>" +
      "</tr></td>";
    }

    return value;
  }

  getRightSideSampleDiveDeeper (): string {
    return "<table><tr><td><h2 class='bold colorGreen'>" + "Dive Deeper" + "</h2></td></tr>" + 

    "<tr><td><p class='tagLineText'>" + this.landingPage.diveDeeperSection.description + "</p></tr></td>" +
    this.getRightSideSampleDiveDeeperItems() +
    "</table>";
  }

  getRightSideSampleDiveDeeperItems(): string {
    var value = "<tr><td><ul>";
    for (let i = 0; i < this.landingPage.diveDeeperSection.links.length; i++) {
      //value += "<tr><td>" +
      value += "<li style='margin-bottom: 15px;'>" +  
      "<a href=" + this.landingPage.diveDeeperSection.links[i].url + " style='display: inline;margin-bottom: 15px;'" +
      "aria-label='" + this.landingPage.diveDeeperSection.links[i].label + " (opens in a new window)'" +
      "target='_blank' #link>" + this.landingPage.diveDeeperSection.links[i].label + "</a>" +
      "</li>";
      //"</tr></td>";
    }
    value += "</ul></tr></td>";
    return value;
  }

  getPage2 (): string {
    return "" +
    "<div><table>" +
    "<tr>" +
    "<td>Page 2 of 2</td>" + 
    "<td> <img class='SBImage' src='http://localhost:4200/assets/images/SmarterBalanced_Logo_Horizontal_Color.png'>"+
    "copyright</td>" +
    "</tr>" +
    "</table></div>";
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