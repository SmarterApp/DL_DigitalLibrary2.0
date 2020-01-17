import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DocumentSection, DocumentSectionType } from '../../components/outline/document-outline.model';
import { PrintableSectionComponent } from '../../printable-section.component';
import { PlaylistResource } from '../../../data/resource/model/playlist.model';
import { PlaylistTopic } from '../../../data/resource/model/playlist-topic.model';

@Component({
  selector: 'sbdl-playlist-topics',
  templateUrl: './playlist-topics.component.html',
  styleUrls: ['./playlist-topics.component.scss', './../../printable-section.component.scss']
})
export class PlaylistTopicsComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  resource: PlaylistResource;

  @Input()
  readingMode: boolean;

  belowCollapsed = false;
  nearCollapsed = false;
  aboveCollapsed = false;

  rowCollapsed = new Map<string, boolean>();

  private subsections: DocumentSection[] = [];

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, DocumentSectionType.PlaylistTopics);
   }

  addSubsection(subsection: DocumentSection) {
    this.subsections.push(subsection);
  }

  toggleBelowCollapsed() {
    if (this.aboveCollapsed && this.nearCollapsed) { return; }
    this.belowCollapsed = !this.belowCollapsed;
  }

  toggleNearCollapsed() {
    if (this.aboveCollapsed && this.belowCollapsed) { return; }
    this.nearCollapsed = !this.nearCollapsed;
  }

  toggleAboveCollapsed() {
    if (this.belowCollapsed && this.nearCollapsed) { return; }
    this.aboveCollapsed = !this.aboveCollapsed;
  }

  setRowCollapsed(t: PlaylistTopic, collapsed: boolean) {
    this.rowCollapsed.set(t.title, collapsed);
  }

  ngAfterViewInit() {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        elementRef: this.headerElement.nativeElement,
        canPrint: true,
        component: this,
        selectedForPrint: true,
        title: 'Performance Progressions',
        fontAwesomeIcon: 'fa-chart-network',
        subsections: this.subsections,
        subsectionsNumbered: false,
        type: DocumentSectionType.PlaylistTopics
      });
    }
  }
}
