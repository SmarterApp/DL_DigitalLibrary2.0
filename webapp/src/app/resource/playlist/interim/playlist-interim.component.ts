import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrintableSectionComponent } from '../../printable-section.component';
import { DocumentSectionType } from '../../components/outline/document-outline.model';

@Component({
  selector: 'sbdl-playlist-interim',
  templateUrl: './playlist-interim.component.html',
  styleUrls: ['./playlist-interim.component.scss', '../../printable-section.component.scss']
})
export class PlaylistInterimComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  content: string;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, DocumentSectionType.PlaylistInterim);
  }

  ngAfterViewInit() {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        fontAwesomeIcon: 'fa-question-circle',
        selectedForPrint: true,
        title: 'What are Interim Assessments?',
        type: DocumentSectionType.PlaylistInterim
      });
    }
  }
}
