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

  private subsections: DocumentSection[] = [];

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
   }

  addSubsection(subsection: DocumentSection) {
    this.subsections.push(subsection);
  }

  toggleBelowCollapsed() {
    this.belowCollapsed = !this.belowCollapsed;
    this.updateCssWidths();
  }

  toggleNearCollapsed() {
    this.nearCollapsed = !this.nearCollapsed;
    this.updateCssWidths();
  }

  toggleAboveCollapsed() {
    this.aboveCollapsed = !this.aboveCollapsed;
    this.updateCssWidths();
  }

  private updateCssWidths() {
    let numCollapsed = 0;

    if (this.belowCollapsed) { numCollapsed++; }
    if (this.nearCollapsed) { numCollapsed++; }
    if (this.aboveCollapsed) { numCollapsed++; }

    if (numCollapsed === 0) {
      this.setBaseStyle('');
    } else {
      let belowWidth = '27%';
      let nearWidth = '27%';
      let aboveWidth = '27%';

      const openWidth = `calc((81% - (4rem * ${numCollapsed})) / ${3 - numCollapsed})`;
      belowWidth = this.belowCollapsed ? '4rem' : openWidth;
      nearWidth = this.nearCollapsed ? '4rem' : openWidth;
      aboveWidth = this.aboveCollapsed ? '4rem' : openWidth;

      this.setBaseStyle(
        `--below-width: ${belowWidth};` +
        `--near-width: ${nearWidth};` +
        `--above-width: ${aboveWidth};`
      );
    }
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
