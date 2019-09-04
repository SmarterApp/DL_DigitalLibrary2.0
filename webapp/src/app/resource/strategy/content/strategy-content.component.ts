import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements, ScrollableSection } from '../../components/outline/scrollable-elements.model';
import { commentsSectionOptions, strategyInActionOptions, instructionalUseOptions } from '../../components/section/section.definitions';
import { SectionOptions } from '../../components/section/section.component';
import { Scroll } from '@angular/router';

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

  sections: ContentSection[];
  private scrollableElements: ScrollableElements;
  
  constructor() { }

  ngOnInit() {
    this.sections = [
      { ...instructionalUseOptions, contentHtml: this.model.instructionalUse },
      { ...commentsSectionOptions, contentHtml: this.model.comments },
      { ...strategyInActionOptions, contentHtml: this.model.strategyInActions }
    ];
  }

  setAttachments($event) {
    this.scrollableElements = {...this.scrollableElements, attachments: $event };
    this.emitScrollableElementsEvent();
  }

  setOverview($event) {
    this.scrollableElements = {...this.scrollableElements, overview: $event };
    this.emitScrollableElementsEvent();
  }

  setSection($event: any, section: ContentSection) {
    section.elementRef = $event;

    this.scrollableElements = this.scrollableElements || <ScrollableElements>{};
    const sections = this.scrollableElements.sections || [];
    this.scrollableElements = { 
      ...this.scrollableElements, 
        sections: [ 
          ... sections, {
            title: section.title,
            sbdlIcon: section.sbdlIcon,
            fontAwesomeIcon: section.fontAwesomeIcon,
            elementRef: section.elementRef
          } 
        ] 
    };
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

interface ContentSection extends SectionOptions {
  contentHtml: string;
  elementRef?: any;
}
