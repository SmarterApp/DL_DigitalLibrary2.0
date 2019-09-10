import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { commentsSectionOptions } from '../../components/section/section.definitions';
import { ScrollableElements } from '../../components/outline/scrollable-elements.model';
import { ResourceModule } from '../../resource.module';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';

@Component({
  selector: 'sbdl-playlist-content',
  templateUrl: './playlist-content.component.html',
  styleUrls: ['./playlist-content.component.scss']
})
export class PlaylistContentComponent implements OnInit {

  commentsOptions = commentsSectionOptions;

  @Input()
  model: ResourceModel;

  @Output()
  loadScrollableElements = new EventEmitter<ScrollableElements>();

  @Output()
  readingModeChanged = new EventEmitter<boolean>();

  private scrollableElements: ScrollableElements;

  constructor() { }

  ngOnInit() {
  }

  setComments($event) {
    this.scrollableElements = {...this.scrollableElements, comments: $event };
    this.emitScrollableElementsEvent();
  }

  emitReadingModeChanged(event) {
    this.readingModeChanged.emit(event);
  }

  private emitScrollableElementsEvent() {
    this.loadScrollableElements.emit(this.scrollableElements);
  }
}
