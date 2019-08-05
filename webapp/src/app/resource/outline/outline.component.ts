import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from './scrollable-elements.model';

@Component({
  selector: 'sbdl-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss']
})
export class OutlineComponent implements OnInit, OnDestroy {

  @Input()
  model: ResourceModel;

  @Input()
  readingMode: boolean;

  @Input()
  set scrollableElements(value: ScrollableElements) {
    this._scrollableElements = value;
    if(this._scrollableElements) {
      // Experimental.  This functionality seems fine at first, but after a few clicks it starts to become a little out of synch and wonky.
      // Uncomment the following line to try:
      // this.wireScrollableObservers();
    }
  }
  get scrollableElements() {
    return this._scrollableElements;
  }

  get getStartedScrolled() {
    return this.currentScrolled && this.currentScrolled.section  === OutlineSection.GetStarted;
  }

  get differentiationScrolled() {
    return this.currentScrolled && this.currentScrolled.section === OutlineSection.Differentiation;
  }

  get formativeScrolled() {
    return this.currentScrolled && this.currentScrolled.section  === OutlineSection.FormativeAssessmentProcess;
  }

  currentScrolled = null;
  nextToScroll = null;

  private _scrollableElements: ScrollableElements = <ScrollableElements>{};
  private observers: IntersectionObserver[] =[];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    for(let observer of this.observers) {
      observer.disconnect();
    }
  }

  scrollToElement(element: Element): void {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  // Experimental.  This functionality seems fine at first, but after a few clicks it starts to become a little out of synch and wonky.
  private wireScrollableObservers() {
    this.wireIntersectionObserver(this._scrollableElements.getStarted, OutlineSection.GetStarted);
    this.wireIntersectionObserver(this._scrollableElements.differentiation, OutlineSection.Differentiation);
    this.wireIntersectionObserver(this._scrollableElements.formativeAssessmentProcess, OutlineSection.FormativeAssessmentProcess);
  }

  private wireIntersectionObserver(element: any, section: OutlineSection) {
    var observer = new IntersectionObserver((entries) => {
      if(document.activeElement) {
        document.activeElement.blur();
      }
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      const entry = entries[0];
      console.log('observing', element.innerText);
      if(entry.isIntersecting === true) {
        console.log('Element ' + entry.target.innerText + ' has just become visible in screen at ', entry);
        if(this.currentScrolled == null || entry.target.offsetTop < this.currentScrolled.entry.target.offsetTop) {
          if(this.currentScrolled != null) {
            console.log('Element ' + entry.target.innerText + ' had a lower position than current ', this.currentScrolled.entry);
          }
          this.currentScrolled = { section: section, entry: entry };
        } else {
          this.nextToScroll =  { section: section, entry: entry };
        }
        
      } else {
        console.log('Element ' + entry.target.innerText + ' is no longer visible in screen.');

        if(this.nextToScroll != null) {
          this.currentScrolled = this.nextToScroll;
          this.nextToScroll = null;
        }
      }
    }, { threshold: [0] });

    observer.observe(element);
    this.observers.push(observer);
  }
}

enum OutlineSection {
  GetStarted,
  Steps,
  Attachments,
  Differentiation, 
  FormativeAssessmentProcess
}