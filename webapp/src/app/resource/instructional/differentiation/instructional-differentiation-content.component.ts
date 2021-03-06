import { Component, Input, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-instructional-differentiation-content',
  templateUrl: './instructional-differentiation-content.component.html',
  styleUrls: ['../../printable-section.component.scss']
})
export class InstructionalDifferentiationContentComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  content: string;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, 'performance-based-differentiation');
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        title: 'Performance-based Differentiation',
        component: this,
        canPrint: true,
        selectedForPrint: true,
        elementRef: this.headerElement.nativeElement,
        type: DocumentSectionType.Subsection
      });
    }
  }
}
