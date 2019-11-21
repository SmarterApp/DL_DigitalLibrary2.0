import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentSection, DocumentSectionType } from '../outline/document-outline.model';
import { PrintableSectionComponent } from '../../printable-section.component';

@Component({
  selector: 'sbdl-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss', '../../printable-section.component.scss']
})
export class SectionComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  contentHtml: string;

  @Input()
  options: SectionOptions;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  ngAfterViewInit() {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        elementRef: this.headerElement.nativeElement,
        canPrint: true,
        component: this,
        selectedForPrint: true,
        title: this.options.title,
        fontAwesomeIcon: this.options.fontAwesomeIcon,
        sbdlIcon: this.options.sbdlIcon,
        type: this.options.sectionType
      });
    }
  }
}

export interface SectionOptions {
  title: string;
  fontAwesomeIcon?: string;
  sbdlIcon?: string;
  iconBackground: 'yellow'|'blue'|'green'|'none';
  sectionType: DocumentSectionType;
}
