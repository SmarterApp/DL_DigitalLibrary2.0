import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from '../../components/outline/scrollable-elements.model';
import { commentsSectionOptions } from '../../components/section/section.definitions';

@Component({
  selector: 'sbdl-professional-content',
  templateUrl: './professional-content.component.html',
  styleUrls: ['./professional-content.component.scss']
})
export class ProfessionalContentComponent implements OnInit {

  @Input()
  model: ResourceModel;

  @Output()
  loadScrollableElements = new EventEmitter<ScrollableElements>();

  @Output()
  readingModeChanged = new EventEmitter<boolean>();

  commentsOptions = commentsSectionOptions;

  private scrollableElements: ScrollableElements;

  constructor() { }

  ngOnInit() {
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

  setOverview($event) {
    this.scrollableElements = {...this.scrollableElements, overview: $event };
    this.emitScrollableElementsEvent();
  }

  setComments($event) {
    this.scrollableElements = {...this.scrollableElements, comments: $event };
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
