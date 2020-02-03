import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrintableSectionComponent } from '../../printable-section.component';
import { DocumentSectionType } from '../../components/outline/document-outline.model';

@Component({
  selector: 'sbdl-playlist-intervention',
  templateUrl: './playlist-intervention.component.html',
  styleUrls: ['./playlist-intervention.component.scss', '../../printable-section.component.scss']
})
export class PlaylistInterventionComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  content: string;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, DocumentSectionType.PlaylistIntervention);
  }

  ngAfterViewInit() {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        fontAwesomeIcon: 'fa-comment-dots', 
        selectedForPrint: true,
        title: 'Suggestions for Intervention',
        type: DocumentSectionType.PlaylistIntervention
      });
    }
  }
}
