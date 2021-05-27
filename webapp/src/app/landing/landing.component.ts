import { Component, HostListener, Inject, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../data/resource/model/grade.model';
import { Subject } from '../data/resource/model/subject.model';
import { LandingPage } from '../data/landing/model/landingPage.model';
import { api2pdfResponse } from '../data/landing/model/api2pdfResponse.model';
import { LandingService } from '../data/landing/landing.service';
import { AppConfig } from 'src/app/common/config/app.config';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

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
  @ViewChild("outsideElement", {static: true}) outsideElement : ElementRef;
  @ViewChild('modalView', {static: true}) modalView$ : ElementRef;
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
  isWaitDisplayed = false;
  urlHome: string = 'https://qa.webapp.dl.smarterbalanced.org';
  headerImage: string;
  showAblePlayer: boolean = true;
  pdfData: any;

  constructor(
    private route: ActivatedRoute,
    private landingService: LandingService,
    private router: Router,
    private sanitizer: DomSanitizer,
    @Inject('Window') private window: Window,
    ) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

  ngOnInit() {
    this.onResize();
    this.route.data.subscribe(data => {
      if (data.landing) {
        this.landingPage = data.landing;
        this.landingPage.howItHelpsSection.description = this.landingPage.howItHelpsSection.description.split('<li>').join('<li style="font-size: 1rem;">').split('"').join("'").replace(/[^\x20-\x7E]/gmi, "");
        this.youtubeVideoId = extractYouTubeVideoId(this.landingPage.marketingVideoLink);
      }
    });
    this.landingType = this.route.snapshot.paramMap.get('landingType');
    
    switch(this.landingType) { 
      case "playlist": { 
         this.resourceTypeSearch = "cp";
         this.title = "Interim Connections Playlists";
         this.headerImage = "/assets/images/connections-playlist.png";
         this.loadDDL();
         break; 
      } 
      case "instructional": { 
        this.resourceTypeSearch = "ir";
        this.title = "Instructional Resources";
        this.headerImage = "/assets/images/instructional-resource.png";
        this.loadDDL();
        break; 
      }       
      case "formative": { 
        this.resourceTypeSearch = "fs";
        this.title = "Formative Assessment Strategies";
        this.headerImage = "/assets/images/formative-strategy.png";
        break; 
      }          
      case "accessibility": { 
        this.resourceTypeSearch = "as";
        this.title = "Accessibility Strategies";
        this.headerImage = "/assets/images/accessibility-strategy.png";
        break; 
      }  
      case "professional": { 
        this.resourceTypeSearch = "pl";
        this.title = "Professional Learning Resources";
        this.headerImage = "/assets/images/professional-learning.png";
        break; 
      }        
      case "items": { 
        this.interimItemPortalUrl = AppConfig.settings.interimItemPortalUrl;
        this.title = "Interim Assessment Item Portal";
        this.headerImage = "/assets/images/iaip 1.png";
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
    this.isWaitDisplayed = true;
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    if (this.selectedGrade !== ""){
      params.grades = this.selectedGrade;
    }

    if (this.selectedSubject !== ""){
      params.subjects = this.selectedSubject;
    }
    this.router.navigate(['search', params]);
    this.isWaitDisplayed = false;
  }
  
  onFilterResourcesClick() {
    this.isWaitDisplayed = true;
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    this.router.navigate(['search', params]);
    this.isWaitDisplayed = false;
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

  openModal() {
    this.showAblePlayer = false;
    this.modalView$.nativeElement.classList.add('visible');
  }

  closeModal() {
    this.showAblePlayer = true;
    this.modalView$.nativeElement.classList.remove('visible');
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

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (!this.showAblePlayer) {
      const outsideElement = this.outsideElement.nativeElement.contains(targetElement);

      if (outsideElement) {
        this.closeModal();
      } 
    }
  }

  @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Escape") {
      this.closeModal();
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
      { code: 'ela', shortName: 'ELA', fullName: 'English Language Arts' },
      { code: 'math', shortName: 'MATH', fullName: 'Mathematics' }];
  }


  async onPrintPage() {
    this.isWaitDisplayed = true;
    this.landingService.postapi2pdf(this.buildPrintHTML(), 
                                    this.getFooterPage(), 
                                    "ToolsForTeachers-" + this.title + ".pdf")
        .subscribe(r => {this.responseApi2pdf(r)})
  }

  responseApi2pdf(results: any) {
    if (AppConfig.settings.api2pdfIsDockerVersion) {
      var file = new Blob([results], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      this.pdfData = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
    }
    else {
      var r = results as api2pdfResponse;
      this.pdfData = this.sanitizer.bypassSecurityTrustResourceUrl(r.pdf);
    }
    this.openModal();
    this.isWaitDisplayed = false;
  }

  buildPrintHTML() : string {

    if (!window.location.origin.toLowerCase().includes("localhost")) {
      this.urlHome = window.location.origin;
    }

    return "" +
    "<!DOCTYPE html> " +
    "<html>" +
    this.getStyles() +
    "<body>" + 
    this.createPage1() +
    this.createPageBreak() +
    this.createPage2() +
    this.getPageFooterSBLogo() +
    "</body>" + 
    "</html>";
  }

  getStyles(): string {
    return "" +
    "<link href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Open+Sans:300,400,600,700&display=swap' rel='stylesheet'/>" +
    "<style> " +
    ".pageMargin {margin: 12px;margin-top: 25px;margin-left: 17px;width: 100%;max-width: 840px;}" +
    ".T4TImage {width: 105px;margin-right: 30px;}" +
    ".headerImage {width: 50px;margin-right: 15px;}" +
    ".headerBorder {width: 10%;border-right: 2px solid lightgray;max-width: 100%;white-space: nowrap;}" +
    ".headerLink {margin-left: 30px;font-family: Montserrat;font-style: normal;text-decoration: none;color: #636974;}" +
    "h1 {color: #3C8517;font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 36px;line-height: 100%;margin-top: 25px;margin-bottom: 15px;}" +
    "h2 {font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 20px;line-height: 120%;margin: 0px;margin-top: 1.0rem;}" +
    ".regText {font-family: Open Sans;font-style: normal;font-weight: normal;font-size: 16px;line-height: 140%;margin: 0px;padding: 0px;vertical-align: text-bottom;padding-top: 5px;}" +
    ".smText {font-size: 12px;}" +
    ".lpImage {height: 225px;width: 225px;}" +
    ".shadow {box-shadow: 0 1px 8px rgb(0 0 0 / 20%), 0 3px 4px rgb(0 0 0 / 12%), 0 3px 3px rgb(0 0 0 / 14%); border-radius: 4px; margin: 1.5rem;}" +
    ".SBImage {width: 79px;height: 21px;}" +
    ".bold {font-weight: bold;}" +
    ".colorGreen {color: #3C8517;}" +
    "li {max-width: 90%;}" + 
    "a {color: #007da3;}" + 
    ".callToActionBackground {background-color: #e0f7ff;padding: 15px;border-radius: 15px;max-width: 93%;}" +
    ".callToActionButton {margin-left: 50px;color: white;background-color: #0080A7;padding: 20px;border-radius: 15px;max-width: 65%;" +
                        "font-family: Open Sans;font-style: normal;font-weight: 600;font-size: 16px;line-height: 110%;" + 
                        "display: flex;align-items: center;text-transform: uppercase;width: 200px;}" +
    "a.button {-webkit-appearance: button;-moz-appearance: button;appearance: button;text-decoration: none;}" +
    "hr {background-color: lightgray;border: none;height: 2px;max-width: unset;width: 100%;margin: 0px;margin-top: 15px;margin-bottom: 15px;}" +
    "#footerCRandImage {position: fixed;bottom: 0;width: 100%;}" +
    "</style>";
  }

  createPage1() : string {
    return "" +
    "<table class='pageMargin'><tbody>" + 
    "<tr>" + this.getHeader() + "</tr>" +
    "<tr>" + this.getTitle() + "</tr>" +
    "<tr>" + this.getTagLine() + "</tr>" +
    "<tr>" + this.getHowWillItHelp() + "</tr>" +
    "<tr>" + this.getStartUsing() + "</tr>" +
    "</tbody></table>";
  }

  getTitle() : string {
    return "" +
    "<td colspan=2>" +
    "<h1>" +
    "<img class='headerImage' src='" + this.urlHome + this.headerImage + "'>" +
    this.title + 
    "</h1></td>";
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
      "<tr><td class='regText'>" + this.landingPage.taglineSection.description + "</td></tr>" +
    "</tbody></table>" + 
    "</td>";
  }

  getHowWillItHelp(): string {
    return "" +
    "<td colspan=2 class='regText' style='width:100%;'>" +
    "<h2 class='bold'>How will they help me?</h2>" + 
    "<div style='margin-left: -15px;width:100%;'>" + this.landingPage.howItHelpsSection.description.replace("<ul>", "<ul style='width: 100%;'>") + "</div>" +
    "</td>";
  }

  getStartUsing (): string {
    var msg = "";

    switch(this.landingType) { 
      case "playlist": { 
        msg = "Interim Connections Playlists are available exclusively on Tools for Teachers. Login to access resources.";
         break; 
      } 
      case "instructional": { 
        msg = "Instructional Resources are available exclusively on Tools for Teachers. Login to access resources.";
         break; 
      } 
      case "formative": { 
        msg = "Formative Strategies are available exclusively on Tools for Teachers. Login to access them.";
         break; 
      } 
      case "accessibility": { 
        msg = "Accessibility Strategies are available exclusively on Tools for Teachers. Visit the site to access them.";
         break; 
      } 
      case "professional": { 
        msg = "Professional Learning Resources are available exclusively on Tools for Teachers. Login to access resources.";
         break; 
      } 
      case "items": { 
        msg = "The IAIP is available exclusively to approved K-12 educators in participating member states via Tools for Teachers.";
         break; 
      } 
   } 

    return "" +
    "<td colspan=2>" +
    "<div class='callToActionBackground'>" +
    "<table style='width: 100%;'><tr><td>" +
      "<h2 style='margin-top: 0px'>" + this.landingPage.callToActionSection.header + "</h2>" +
      "<p class='regText'>" + msg + "</p>" + 
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

  getPageFooterSBLogo(): string {
    return "" + 
    "<footer id='footerCRandImage'>" +
    "<div style='float: right;width:100%;'>" +
    "<img class='SBImage' style='float: right;padding-right: 2.2em;padding-top: 2em;' src='" + this.urlHome +  "/assets/images/SmarterBalanced_Logo_Horizontal_Color.png'>" +
    "</div></footer>";
  }

  getFooterPage(): string {
    const copyrightYear = (new Date()).getFullYear();
    return "<div class='page-footer' style='width:100%; padding-left: 6em; text-align:left;font-family: Open Sans; font-size:8px;'>Page <span class='pageNumber'></span> of <span class='totalPages'></span></div><div class='page-footer' style='width:100%; text-align:right; font-size:8px;font-family: Open Sans;display: inline; padding-right: 6em;'>© " + copyrightYear + " The Regents of the University of California</div>";
  }

  createPageBreak() : string {
    return  "<div style ='display:block; clear:both; page-break-before:always;'></div>"
  }

  createPage2() : string {
    return "" +
    "<table class='pageMargin'><tbody>" + 
    "<tr>" + this.getHowCanIUse() + "</tr>" +
    "<tr>" + this.getRightSide() + "</tr>" +
    "</tbody></table>"; 
  }

  getHowCanIUse (): string {
    return "" +
    "<td colspan=2>" +
    "<h2 class='bold'>" + this.landingPage.howToUseSection.header + "</h2>" +
    this.getHowCanIUseGetItems() +
    "</td>";
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
        "<p class='regText'>" + this.landingPage.howToUseSection.subSections[i].description + "</p>" +
        "</td></tr>";
    }

    return value;
  }

  getRightSide (): string {
    var content = "";
    if (this.landingPage.sampleSections.sampleResources.length > 0) {
      content = "<td style='width: 50%'>" + this.getRightSideSamplePlaylist() + "</td>" +
                "<td style='width: 50%'>" + this.getRightSideSampleDiveDeeper() + "</td>";
      }
      else {
        content = "<td style='width: 100%'>" + this.getRightSideSampleDiveDeeper() + "</td>";
      }

    return "" +
    "<td colspan=2>" +
    "<table style='width: 100%'>" + 
    "<tr><td colspan=2><hr></td></tr>" +
    "<tr style='vertical-align: top;'>" + 
    content + 
    "</tr></table>" + 
    "</td>";
  }

  getRightSideSamplePlaylist (): string {
    return "<table><tr><td><h2 class='bold colorGreen'>" + this.landingPage.sampleSections.header + "</h2></td></tr>" + 
    "<tr><td><p class='regText'>Access these samples without needing to log into the site.</p></tr></td>" +
    this.getRightSideSamplePlaylistItems() +
    "</table>";
  }

  getRightSideSamplePlaylistItems(): string {
    var value = "";
    var urlValue = "";

    for (let i = 0; i < this.landingPage.sampleSections.sampleResources.length; i++) {
      value = value + "<tr><td>" +
      "<br><a class='regText' href='" + this.urlHome + "/resource/" + this.landingPage.sampleSections.sampleResources[i].id + "'" +
      "target='blank'>"  + this.landingPage.sampleSections.sampleResources[i].title + "</a>" +
      "<br><p class='regText' style='margin: 0px;'>" + this.landingPage.sampleSections.sampleResources[i].detail + "</p>" +
      "</tr></td>";
    }

    return value;
  }

  getRightSideSampleDiveDeeper (): string {
    return "<table><tr><td><h2 class='bold colorGreen'>" + "Dive Deeper" + "</h2></td></tr>" + 

    "<tr><td><p class='regText'>" + this.landingPage.diveDeeperSection.description + "</p></tr></td>" +
    this.getRightSideSampleDiveDeeperItems() +
    "</table>";
  }

  getRightSideSampleDiveDeeperItems(): string {
    var value = "<tr><td><ul>";
    for (let i = 0; i < this.landingPage.diveDeeperSection.links.length; i++) {
      value += "<li style='margin-bottom: 15px;'>" +  
      "<a class='regText' href=" + this.landingPage.diveDeeperSection.links[i].url + " style='display: inline;margin-bottom: 15px;'" +
      "aria-label='" + this.landingPage.diveDeeperSection.links[i].label + " (opens in a new window)'" +
      "target='_blank' #link>" + this.landingPage.diveDeeperSection.links[i].label + "</a>" +
      "</li>";
    }
    value += "</ul></tr></td>";
    return value;
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