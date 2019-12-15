import { Component, Input, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InstructionalResource } from 'src/app/data/resource/model/instructional.model';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-instructional-differentiation',
  templateUrl: './instructional-differentiation.component.html',
  styleUrls: ['./instructional-differentiation.component.scss', '../../printable-section.component.scss']
})
export class InstructionalDifferentiationComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  resource: InstructionalResource;

  private subsections: DocumentSection[] = [];

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  hasDifferentiationContent(): boolean {
    return !!this.resource.differentiation.trim();
  }

  ngAfterViewInit(): void {
    this.emitSectionLoaded();
  }

  addSubsection(subsection: DocumentSection): void {
    this.subsections.push(subsection);
    this.emitSectionLoaded();
  }

  emitSectionLoaded(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        title: this.hasDifferentiationContent() ? 'Differentiation' : 'Accessibility Strategies Used',
        component: this,
        canPrint: true,
        selectedForPrint: true,
        subsections: this.subsections.length > 1 ? this.subsections : undefined,
        elementRef: this.headerElement.nativeElement,
        fontAwesomeIcon: 'fa-universal-access',
        type: DocumentSectionType.Differentiation
      });
    }
  }
}
