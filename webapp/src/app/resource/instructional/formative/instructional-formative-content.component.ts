import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormativeAssessmentContent } from 'src/app/data/resource/model/formative-assessment-content.model';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-instructional-formative-content',
  templateUrl: './instructional-formative-content.component.html',
  styleUrls: ['../../printable-section.component.scss']
})
export class InstructionalFormativeContentComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  content: FormativeAssessmentContent;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, 'how-its-used');
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        title: 'How It\'s Used',
        elementRef: this.headerElement.nativeElement,
        canPrint: true,
        component: this,
        selectedForPrint: true,
        type: DocumentSectionType.Subsection
      });
    }
  }
}
