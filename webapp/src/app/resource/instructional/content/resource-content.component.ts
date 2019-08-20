import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from '../../outline/scrollable-elements.model';

@Component({
  selector: 'sbdl-resource-content',
  templateUrl: './resource-content.component.html',
  styleUrls: ['./resource-content.component.scss']
})
export class ResourceContentComponent implements OnInit {

  @Input()
  model: ResourceModel;

  @Output()
  loadScrollableElements = new EventEmitter<ScrollableElements>();

  @Output()
  readingModeChanged = new EventEmitter<boolean>();

  private scrollableElements: ScrollableElements;

  get details() {
    return this.model.details;
  }

  constructor() { }

  ngOnInit() {
  }

  setGetStarted($event) {
    this.scrollableElements = {...this.scrollableElements, getStarted: $event };
    this.emitScrollableElementsEvent();
  }

  setDifferentiation($event) {
    this.scrollableElements = {...this.scrollableElements, differentiation: $event };
    this.emitScrollableElementsEvent();
  }

  setFormative($event) {
    this.scrollableElements = {...this.scrollableElements, formativeAssessmentProcess: $event };
    this.emitScrollableElementsEvent();
  }

  setSteps($event) {
    this.scrollableElements = {...this.scrollableElements, steps: $event }; 
    this.emitScrollableElementsEvent();
  }

  setAttachments($event) {
    this.scrollableElements = {...this.scrollableElements, attachments: $event };
    this.emitScrollableElementsEvent();
  }

  scrollToAttachments() {
    if(this.scrollableElements && this.scrollableElements.attachments) {
      this.scrollableElements.attachments.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }

  emitReadingModeChanged(event) {
    this.readingModeChanged.emit(event);
  }

  private emitScrollableElementsEvent() {
    if(this.scrollableElements.getStarted 
        && this.scrollableElements.differentiation 
        && this.scrollableElements.steps
        && this.scrollableElements.attachments
        && this.scrollableElements.formativeAssessmentProcess) {
      this.loadScrollableElements.emit(this.scrollableElements);
    }
  }
}
