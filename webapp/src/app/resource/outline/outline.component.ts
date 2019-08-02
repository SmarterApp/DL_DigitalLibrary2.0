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
      this.wireScrollableObservers();
    }
  }
  get scrollableElements() {
    return this._scrollableElements;
  }

  getStartedScrolled = false;
  differentiationScrolled = false;
  formativeScrolled = false;

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
    this.resetScrolled();
  }

  private wireScrollableObservers() {
    this.wireIntersectionObserver(this._scrollableElements.getStarted, scrolled => this.getStartedScrolled = scrolled);
    this.wireIntersectionObserver(this._scrollableElements.differentiation, scrolled => this.differentiationScrolled = scrolled);
    this.wireIntersectionObserver(this._scrollableElements.formativeAssessmentProcess, scrolled => this.formativeScrolled = scrolled)
  }

  private wireIntersectionObserver(element: any, setScrolled) {
    var observer = new IntersectionObserver((entries) => {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      console.log('observing', element);
      if(entries[0].isIntersecting === true) {
        this.resetScrolled();
        setScrolled(true);
        console.log('Element has just become visible in screen');
      } else {
        setScrolled(false);
      }
    }, { threshold: [0] });

    observer.observe(element);
    this.observers.push(observer);
  }

  private resetScrolled() {
    this.getStartedScrolled = false;
    this.differentiationScrolled = false;
    this.formativeScrolled = false;
  }
}

