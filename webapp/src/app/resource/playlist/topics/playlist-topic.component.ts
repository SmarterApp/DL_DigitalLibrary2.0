import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentSectionType } from '../../components/outline/document-outline.model';
import { PrintableSectionComponent } from '../../printable-section.component';
import { PlaylistTopic } from '../../../data/resource/model/playlist-topic.model';

@Component({
  selector: 'sbdl-playlist-topic',
  templateUrl: './playlist-topic.component.html',
  styleUrls: ['./playlist-topic.component.scss']
})
export class PlaylistTopicComponent extends PrintableSectionComponent implements AfterViewInit, OnInit {

  @Input()
  topic: PlaylistTopic;

  @Input()
  belowCollapsed: boolean;

  @Input()
  nearCollapsed: boolean;

  @Input()
  aboveCollapsed: boolean;

  rowCollapsed = false;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, '');
  }

  ngOnInit(): void {
    this.sectionId = this.topic.title;
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        elementRef: this.headerElement.nativeElement,
        canPrint: true,
        component: this,
        selectedForPrint: true,
        title: this.topic.title,
        type: DocumentSectionType.Subsection
      });
    }
  }

}
