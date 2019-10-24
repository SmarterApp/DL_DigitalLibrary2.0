import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { commentsSectionOptions } from './components/section/section.definitions';
import { ResourceModel } from '../data/resource/model/resource.model';
import { ScrollableElements } from './components/outline/scrollable-elements.model';

/**
 * A parent class to other resource conent components.
 * No @Component attribute here because it is never used directly.
 */
export class ResourceContentComponent implements OnInit {
    commentsOptions = commentsSectionOptions;

    @Input()
    model: ResourceModel;

    @Output()
    loadScrollableElements = new EventEmitter<ScrollableElements>();

    @Output()
    readingModeChanged = new EventEmitter<boolean>();

    protected scrollableElements: ScrollableElements;

    constructor() { }

    ngOnInit() {
    }

    setComments($event) {
      this.scrollableElements = {...this.scrollableElements, comments: $event };
      this.emitScrollableElementsEvent();
    }

    setGetStarted($event) {
      this.scrollableElements = {...this.scrollableElements, getStarted: $event };
      this.emitScrollableElementsEvent();
    }

    setOverview($event) {
      this.scrollableElements = {...this.scrollableElements, overview: $event };
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

    setTopics($event) {
      this.scrollableElements = {...this.scrollableElements, topics: $event };
      this.emitScrollableElementsEvent();
    }

    setAssessmentInfo($event) {
      this.scrollableElements = {...this.scrollableElements, assessmentInfo: $event };
      this.emitScrollableElementsEvent();
    }

    scrollToAttachments() {
      if (this.scrollableElements && this.scrollableElements.attachments) {
        this.scrollableElements.attachments.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }
    }

    emitReadingModeChanged(event) {
      this.readingModeChanged.emit(event);
    }

    protected emitScrollableElementsEvent() {
      this.loadScrollableElements.emit(this.scrollableElements);
    }
}
