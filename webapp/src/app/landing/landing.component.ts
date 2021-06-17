import { Component, HostListener, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../data/resource/model/grade.model';
import { Subject } from '../data/resource/model/subject.model';
import { LandingPage } from '../data/landing/model/landingPage.model';
import { api2pdfResponse } from '../data/landing/model/api2pdfResponse.model';
import { LandingService } from '../data/landing/landing.service';
import { AppConfig } from 'src/app/common/config/app.config';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import * as printJS from 'print-js';


// Used to pull the youtube Id for use with Able Player
const YT_MATCH_VID = /.*youtube.*v=([^&]+).*$|.*youtu.be\/([^&?]+).*$|.*youtube\/embed\/([^&?]+).*$/;

// Needed for passing to the search page
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
  // 2 named UI elements used as part of the modal print process
  @ViewChild("outsideElement", { static: true }) outsideElement: ElementRef;
  @ViewChild('modalView', { static: true }) modalView$: ElementRef;
  @ViewChild('closeButton', { static: false }) closeButton: ElementRef;
  params: SearchQueryParams;
  landingType: string;
  resourceTypeSearch: string;
  title: string;
  grades: Grade[];                  // Array of grades to bind to DDL
  subjects: Subject[];              // Array of subjects to bind to DDL
  selectedGrade: string = "";       // the selected item on the grade DDL
  selectedSubject: string = "";     // the selected item on the subject DDL
  landingPage: LandingPage;
  interimItemPortalUrl = '#';
  youtubeVideoId: string = '';
  element: any;

  // used in responsiveness logic
  removeRightMarginSize = 1300;   // sets the width of the page to hide the right margin
  returnRightMarginSize = 1100;   // if the user is making the page wider, redisplay the right margin 
  resizeTimeout;                  // timer used to control how often the resize logic is done
  wasSmall: boolean;              // binding var used in the UI
  lastSize: number;               // placeholder to save off the last time the used resized the page
  // is the user making the page smaller or larger

  // used in the printing process
  isWaitDisplayed = false;

  // This is needed for creating the html to print a landing a landing when in dev mode (localhost)
  // Need a public url to access the images and other resource for api2pdf process
  urlHome: string = 'https://qa.webapp.dl.smarterbalanced.org';
  headerImage: string;

  // needed to hide able player when displaying the printing modal 
  // the z-index on Able Player will make it sit on top of the model window.
  showAblePlayer: boolean = true;
  pdfData: any;     // The PDF that will bind to the html 

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

    // set the responsiveness sizing first thing
    this.onResize();
    this.route.data.subscribe(data => {
      if (data.landing) {
        this.landingPage = data.landing;
        // Note: need to update the styling on any li items in the data.  
        //       also, need to remove any spaces or not visible items
        this.landingPage.howItHelpsSection.description = this.landingPage.howItHelpsSection.description.split('<li>').join('<li style="font-size: 1rem;">').split('"').join("'").replace(/[^\x20-\x7E]/gmi, "");
        this.youtubeVideoId = extractYouTubeVideoId(this.landingPage.marketingVideoLink);
      }
    });
    this.landingType = this.route.snapshot.paramMap.get('landingType');

    switch (this.landingType) {
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

      // If not any of the landing page types, redirect to the home page
      default: {
        this.router.navigate(['']);
        break;
      }
    }
  }

  // the next few methods handle all the search options
  // this handles when grade and subject is displayed
  onFilterResourcesSubjectAndGradeClick() {
    this.isWaitDisplayed = true;
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    if (this.selectedGrade !== "") {
      params.grades = this.selectedGrade;
    }

    if (this.selectedSubject !== "") {
      params.subjects = this.selectedSubject;
    }
    this.router.navigate(['search', params]);
    this.isWaitDisplayed = false;
  }

  // this handles filtering for just the resource type
  onFilterResourcesClick() {
    this.isWaitDisplayed = true;
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    this.router.navigate(['search', params]);
    this.isWaitDisplayed = false;
  }

  // this handles when a user enters search text
  search(newParams: SearchQueryParams) {
    const params: SearchQueryParams = new SearchQueryParams();
    params.resourceTypes = this.resourceTypeSearch;
    params.query = newParams.query;
    this.router.navigate(['search', params]);
  }

  // button to redirect to the iaip
  openInterimItems() {
    window.open(this.interimItemPortalUrl, "_blank");
  }

  // button to redirect to the login page
  login() {
    this.router.navigate(['/auth/login'], { queryParams: { redirectUrl: this.router.url } });
  }

  openModal() {
    this.showAblePlayer = false;
    this.modalView$.nativeElement.classList.add('visible');
  }

  closeModal() {
    this.showAblePlayer = true;
    this.modalView$.nativeElement.classList.remove('visible');
  }

  printPDF() {
    printJS(this.getPdfUrl())
  }

  async downloadPDF() {
    let pdfUrl = this.getPdfUrl();
    let title = `${this.title}.pdf`;

    let blob = await fetch(pdfUrl).then(r => r.blob());
    this.downloadFile(blob, title);

  }

  getPdfUrl(){
    return String(Object.values(this.pdfData)[0]);
  }

  downloadFile(blob, fileName){
    const link = document.createElement('a');
    // create a blobURI pointing to our Blob
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    // some browser needs the anchor to be in the doc
    document.body.append(link);
    link.click();
    link.remove();
    // in case the Blob uses a lot of memory
    setTimeout(() => URL.revokeObjectURL(link.href), 7000);
  };

  // Part of responsiveness, handles the resize event
  @HostListener('window:resize', ['$event'])
  onResize(event?) {

    // Clear out any prior timer
    clearTimeout(this.resizeTimeout);

    // set a timer for 100 ms to do the resizing
    // this will allow if the user moves to a size and pauses 
    // then the resize function will be called.
    this.resizeTimeout = setTimeout(this.doResize, 100);
  }

  // function to calculate the bool wasSmall that is used 
  // in binding to display the right margin or at the
  // bottom of the page
  doResize = () => {

    // calulates if the width is too small
    const isSmall = this.window.innerWidth <= this.removeRightMarginSize;

    // if the page is too small, then more test are needed.
    if (isSmall) {
      // Test if the user is making the width smaller or bigger.
      // 
      if (this.window.innerWidth > this.lastSize && this.window.innerWidth > this.returnRightMarginSize) {
        this.wasSmall = false;
        this.lastSize = this.window.innerWidth;
        return;
      }
    }
    this.wasSmall = isSmall;

    // saves off the current width too be used next time
    // to calculate which way the user is sizing the window
    this.lastSize = this.window.innerWidth;
  }

  // handles the modal close when user clicks off the modal
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (!this.showAblePlayer) {
      const outsideElement = this.outsideElement.nativeElement.contains(targetElement);

      if (outsideElement) {
        this.closeModal();
      }
    }
  }

  // handles the esc key when the model is displayed
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Escape") {
      this.closeModal();
    }
  }

  // hard coded grades and subjects (for now)
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

  // handles when the use press the print page
  async onPrintPage() {
    this.isWaitDisplayed = true;
    this.landingService.postapi2pdf(this.buildPrintHTML(),
      this.getFooterPage(),
      "ToolsForTeachers-" + this.title + ".pdf")   // the name of the file when downloaded
      .subscribe(r => { this.responseApi2pdf(r) })
  }

  // handles the response from api2pdf and opens the modal window to display the pdf
  responseApi2pdf(results: any) {

    // The docker version of the api will return back a blob.
    // note: in both cases, the api will assign a guid name
    //       when downloaded, the file will be named base on the request.
    if (AppConfig.settings.api2pdfIsDockerVersion) {

      // this will create the blob into a local file
      var file = new Blob([results], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      this.pdfData = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
    }

    // The normal api2pdf site will return a json object of type api2pdfResponse
    else {
      var r = results as api2pdfResponse;
      this.pdfData = this.sanitizer.bypassSecurityTrustResourceUrl(r.pdf);
    }
    this.openModal();
    this.isWaitDisplayed = false;
  }

  // the main method to build the html for the pdf
  buildPrintHTML(): string {

    if (!window.location.origin.toLowerCase().includes("localhost")) {
      this.urlHome = window.location.origin;
    }
    else {
      if (AppConfig.settings.api2pdfIsDockerVersion) {
        alert("Developer message: To get landing pages printing to work from localhost, find this message.")
      }
      //************************************************************************************ */
      // Read me
      // Read me
      // Read me
      // printing landing pages uses a Docker image of api2pdf.  When developing using localhost
      // this causes a Cross-Origin Resource Sharing (CORS) issue/error with the api.
      // The work around is to open a browser with security disable.
      // For Chrome on windows:
      //    1. Open command window.
      //    2. change the folder to the location of Chrome.  
      //          cd C:\Program Files (x86)\Google\Chrome\Application
      //    3. run
      //          chrome.exe --disable-web-security --user-data-dir="c:/ChromeDevSession"
      //        Note: you will need to create the folder c:/ChromeDevSession
      //    4. run the web app normally.
      //************************************************************************************ */
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

  // All the styles used in the pdf
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

  // the entire pdf is setup to be in a table.  Each page is it's own table.
  // page 1 has two columns
  createPage1(): string {
    return "" +
      "<table class='pageMargin'><tbody>" +
      "<tr>" + this.getHeader() + "</tr>" +
      "<tr>" + this.getTitle() + "</tr>" +
      "<tr>" + this.getTagLine() + "</tr>" +
      "<tr>" + this.getHowWillItHelp() + "</tr>" +
      "<tr>" + this.getStartUsing() + "</tr>" +
      "</tbody></table>";
  }

  // the header with logo / T4T - resource type
  getHeader(): string {
    return "" +
      "<td class='headerBorder'>" +
      "<img class='T4TImage' src='" + this.urlHome + "/assets/svg/tft-logo-full.svg'>" +
      "</td><td>" +
      "<a class='headerLink' href='" + this.urlHome + "/landing/" + this.landingType + "'" +
      "target='blank'>SmarterToolsForTeachers.org/" + this.landingType + "</a>" +
      "</td>";
  }

  // the resource title spans both columns
  // Resource image - title
  getTitle(): string {
    return "" +
      "<td colspan=2>" +
      "<h1>" +
      "<img class='headerImage' src='" + this.urlHome + this.headerImage + "'>" +
      this.title +
      "</h1></td>";
  }


  // tag line spans both columns
  // then inside has a new table.  
  // Text on the right (2 rows) and the resource image on the right (one row with a row span)
  getTagLine(): string {
    return "" +
      "<td colspan=2>" +
      "<table style='width:100%;'><tbody>" +
      "<tr>" +
      "<td style='width:75%;'>" +
      "<h2>" + this.landingPage.taglineSection.header + "</h2>" +
      "</td>" +
      "<td rowspan=2 style='width:25%;'>" + "<img class='lpImage shadow' src='" + this.landingPage.marketingGraphicUri + "'>" + "</td>" +
      "</tr>" +
      "<tr><td class='regText'>" + this.landingPage.taglineSection.description + "</td></tr>" +
      "</tbody></table>" +
      "</td>";
  }

  // how will it help spans the two columns
  // Then has a header and then the body of the description
  getHowWillItHelp(): string {
    return "" +
      "<td colspan=2 class='regText' style='width:100%;'>" +
      "<h2 class='bold'>How will they help me?</h2>" +
      "<div style='margin-left: -15px;width:100%;'>" + this.landingPage.howItHelpsSection.description.replace("<ul>", "<ul style='width: 100%;'>") + "</div>" +
      "</td>";
  }

  getStartUsing(): string {
    var msg = "";
    var header = "";

    switch (this.landingType) {
      case "playlist": {
        header = "Start Using Playlists";
        msg = "Interim Connections Playlists are available exclusively on Tools for Teachers. Login to access resources.";
        break;
      }
      case "instructional": {
        header = "Start Using Instructional Resources";
        msg = "Instructional Resources are available exclusively on Tools for Teachers. Login to access resources.";
        break;
      }
      case "formative": {
        header = "Start Using Formative Strategies";
        msg = "Formative Strategies are available exclusively on Tools for Teachers. Login to access them.";
        break;
      }
      case "accessibility": {
        header = "Start Using Accessibility Strategies";
        msg = "Accessibility Strategies are available exclusively on Tools for Teachers. Visit the site to access them.";
        break;
      }
      case "professional": {
        header = "Start Using Professional Learning Resources";
        msg = "Professional Learning Resources are available exclusively on Tools for Teachers. Login to access resources.";
        break;
      }
      case "items": {
        header = "Login to Access the IAIP";
        msg = "The IAIP is available exclusively to approved K-12 educators in participating member states via Tools for Teachers.";
        break;
      }
    }

    return "" +
      "<td colspan=2>" +
      "<div class='callToActionBackground'>" +
      "<table style='width: 100%;'><tr><td>" +
      "<h2 style='margin-top: 0px'>" + header + "</h2>" +
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

  // NOTE: the api2pdf has an option to add a footer (header too)
  // However, that process will not handle an image.  So this footer is set up to 
  // be placed right above the footer created by the api.
  getPageFooterSBLogo(): string {
    return "" +
      "<footer id='footerCRandImage'>" +
      "<div style='float: right;width:100%;'>" +
      "<img class='SBImage' style='float: right;padding-right: 2.2em;padding-top: 2em;' src='" + this.urlHome + "/assets/images/SmarterBalanced_Logo_Horizontal_Color.png'>" +
      "</div></footer>";
  }

  // This is the api footer option.
  getFooterPage(): string {
    const copyrightYear = (new Date()).getFullYear();
    return "<div class='page-footer' style='width:100%; padding-left: 6em; text-align:left;font-family: Open Sans; font-size:8px;'>Page <span class='pageNumber'></span> of <span class='totalPages'></span></div><div class='page-footer' style='width:100%; text-align:right; font-size:8px;font-family: Open Sans;display: inline; padding-right: 6em;'>© " + copyrightYear + " The Regents of the University of California</div>";
  }

  createPageBreak(): string {
    return "<div style ='display:block; clear:both; page-break-before:always;'></div>"
  }

  // page 2 created with a new table
  createPage2(): string {
    return "" +
      "<table class='pageMargin'><tbody>" +
      "<tr>" + this.getHowCanIUse() + "</tr>" +
      "<tr>" + this.getRightSide() + "</tr>" +
      "</tbody></table>";
  }

  // How can I use section 
  // the header does a column span
  getHowCanIUse(): string {
    return "" +
      "<td colspan=2>" +
      "<h2 class='bold'>" + this.landingPage.howToUseSection.header + "</h2>" +
      this.getHowCanIUseGetItems() +
      "</td>";
  }

  // the items puts the spots in the first column (with a row span)
  // the text goes in the right column with a row for the title and a second row for the description
  getHowCanIUseGetItems(): string {
    var value = "";
    var image = "";
    for (let i = 0; i < this.landingPage.howToUseSection.subSections.length; i++) {

      if (((i + 1) % 3) === 1) {
        image = "yellow-spot-4.png";
      }
      else if (((i + 1) % 3) === 2) {
        image = "green-spot-3.png";
      }
      else {
        image = "blue-spot.png";
      }

      value = value + "<tr><td rowspan=2 style='vertical-align: top;'>" +
        "<img style='height: 36px;margin-top: 10px;margin-right: 15px;' src='" + this.urlHome + "/assets/images/" + image + "'>" +
        "</td><td><h2>" + this.landingPage.howToUseSection.subSections[i].title + "</h2>" +
        "</td></tr>" +
        "<tr><td>" +
        "<p class='regText'>" + this.landingPage.howToUseSection.subSections[i].description + "</p>" +
        "</td></tr>";
    }

    return value;
  }

  // this section will have the items that are on the right side of the 
  // normal landing page.  The sample play list and Dive Deeper
  // the content is put into a table inside the page 2 table.
  getRightSide(): string {
    var content = "";

    // in the case were a resource type does not have a play list
    // the dive deeper section needs to take the entire width
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

  // put the sample play list into it's own table
  // row one for the header
  // row two for the hard coded text
  // then a row for each item
  getRightSideSamplePlaylist(): string {
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
        "target='blank'>" + this.landingPage.sampleSections.sampleResources[i].title + "</a>" +
        "<br><p class='regText' style='margin: 0px;'>" + this.landingPage.sampleSections.sampleResources[i].detail + "</p>" +
        "</td></tr>";
    }

    return value;
  }

  // put the deeper dive content in it's own table
  // with the title and description followed with the items
  getRightSideSampleDiveDeeper(): string {
    return "<table><tr><td><h2 class='bold colorGreen'>" + "Dive Deeper" + "</h2></td></tr>" +

      "<tr><td><p class='regText'>" + this.landingPage.diveDeeperSection.description + "</p></tr></td>" +
      this.getRightSideSampleDiveDeeperItems() +
      "</table>";
  }

  // For each deeper dive items, create a row with all the list items inside the column
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