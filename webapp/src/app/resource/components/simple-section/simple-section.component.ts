import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentSectionType } from '../outline/document-outline.model';
import { PrintableSectionComponent } from '../../printable-section.component';

@Component({
  selector: 'sbdl-simple-section',
  templateUrl: './simple-section.component.html',
  styleUrls: ['./simple-section.component.scss', '../../printable-section.component.scss']
})
export class SimpleSectionComponent extends PrintableSectionComponent implements AfterViewInit, OnInit {

  @Input()
  contentHtml: string;

  @Input()
  options: SimpleSectionOptions;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, '');
  }

  ngOnInit() {
    if (this.options.sectionType === DocumentSectionType.Subsection) {
      this.sectionId = this.options.title;
    } else {
      this.sectionId = this.options.sectionType;
    }
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

export interface SimpleSectionOptions {
  title: string;
  fontAwesomeIcon?: string;
  sbdlIcon?: string;
  iconBackground: 'yellow'|'blue'|'green'|'none';
  sectionType: DocumentSectionType;
}
