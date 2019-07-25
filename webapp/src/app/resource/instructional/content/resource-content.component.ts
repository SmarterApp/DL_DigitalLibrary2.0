import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from '../../outline/scrollable-elements.model';
import { coalesce } from 'src/app/common/utils';

@Component({
  selector: 'sbdl-resource-content',
  templateUrl: './resource-content.component.html',
  styleUrls: ['./resource-content.component.scss']
})
export class ResourceContentComponent implements OnInit, AfterViewInit {

  @Input()
  model: ResourceModel;

  @Output()
  loadScrollableElements = new EventEmitter<ScrollableElements>();

  private scrollableElements: ScrollableElements;

  get details() {
    return this.model.details;
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

  setGetStarted($event) {
    this.scrollableElements = coalesce(this.scrollableElements, <ScrollableElements>{});
    this.scrollableElements.getStarted = $event;

    if(this.scrollableElements.getStarted) {
      // TODO: once all elements have been populated then emit the event.
      this.loadScrollableElements.emit(this.scrollableElements);
    }
  }
}
