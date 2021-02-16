import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentSection, DocumentSectionType } from '../../components/outline/document-outline.model';
import { PrintableSectionComponent } from '../../printable-section.component';
import { PlaylistResource } from '../../../data/resource/model/playlist.model';
import { PlaylistTopic } from '../../../data/resource/model/playlist-topic.model';

@Component({
  selector: 'sbdl-playlist-background',
  templateUrl: './playlist-background.component.html',
  styleUrls: ['./playlist-background.component.scss', './../../printable-section.component.scss']
})
export class PlaylistBackgroundComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  overview: {
    description: string;
    importance: string;
    academicVocabulary: string;
  };
  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, DocumentSectionType.Overview);
  }

  // TODOJR: in progress
  private isViewInterimItemsVisable = true;
  

  ngAfterViewInit() {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        selectedForPrint: true,
        title: 'IAB Background',
        fontAwesomeIcon: 'fa-check-circle',
        type: DocumentSectionType.Overview
      });
    }
  }
}
