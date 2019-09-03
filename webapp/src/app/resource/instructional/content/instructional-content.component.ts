import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from '../../components/outline/scrollable-elements.model';
import { commentsSectionOptions } from '../../components/section/section.definitions';

@Component({
  selector: 'sbdl-instructional-content',
  templateUrl: './instructional-content.component.html',
  styleUrls: ['./instructional-content.component.scss']
})
export class InstructionalContentComponent implements OnInit {

  @Input()
  model: ResourceModel;

  @Output()
  loadScrollableElements = new EventEmitter<ScrollableElements>();

  @Output()
  readingModeChanged = new EventEmitter<boolean>();

  private scrollableElements: ScrollableElements;

  commentsOptions = commentsSectionOptions;

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

  setComments($event) {
    this.scrollableElements = {...this.scrollableElements, comments: $event };
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
    this.loadScrollableElements.emit(this.scrollableElements);
  }
}
