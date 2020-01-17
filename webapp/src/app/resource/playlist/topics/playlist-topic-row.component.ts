/*tslint:disable:component-selector*/
import { AfterViewInit, EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentSectionType } from '../../components/outline/document-outline.model';
import { PrintableSectionComponent } from '../../printable-section.component';
import { PlaylistTopic } from '../../../data/resource/model/playlist-topic.model';
import { slugify } from 'src/app/pipes/slugify.pipe';

@Component({
  selector: '[sbdl-playlist-topic-row]',
  templateUrl: './playlist-topic-row.component.html',
  styleUrls: ['./playlist-topic-row.component.scss']
})
export class PlaylistTopicRowComponent extends PrintableSectionComponent implements AfterViewInit, OnInit {

  @Input()
  topic: PlaylistTopic;

  @Input()
  belowCollapsed: boolean;

  @Input()
  nearCollapsed: boolean;

  @Input()
  aboveCollapsed: boolean;

  @Output()
  rowCollapseChanged = new EventEmitter<boolean>();

  rowCollapsed = false;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, '', {
      printSelected: '--print-display: table-row',
      printHidden: '--print-display: none'
    });
  }

  ngOnInit(): void {
    this.sectionId = slugify(this.topic.title);
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

  setRowCollapsed(collapsed: boolean) {
    this.rowCollapsed = collapsed;
    this.rowCollapseChanged.emit(collapsed);
  }
}
