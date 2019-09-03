import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from '../../components/outline/scrollable-elements.model';
import { commentsSectionOptions, strategyInActionOptions, instructionalUseOptions } from '../../components/section/section.definitions';

@Component({
  selector: 'sbdl-strategy-content',
  templateUrl: './strategy-content.component.html',
  styleUrls: ['./strategy-content.component.scss']
})
export class StrategyContentComponent implements OnInit {
  @Input()
  model: ResourceModel;

  @Output()
  loadScrollableElements = new EventEmitter<ScrollableElements>();

  @Output()
  readingModeChanged = new EventEmitter<boolean>();

  private scrollableElements: ScrollableElements;

  instructionalUse = instructionalUseOptions;
  commentsSection = commentsSectionOptions;
  strategySection = strategyInActionOptions;
  
  constructor() { }

  ngOnInit() {
  }

  setAttachments($event) {
    this.scrollableElements = {...this.scrollableElements, attachments: $event };
    this.emitScrollableElementsEvent();
  }

  setOverview($event) {
    this.scrollableElements = {...this.scrollableElements, overview: $event };
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
