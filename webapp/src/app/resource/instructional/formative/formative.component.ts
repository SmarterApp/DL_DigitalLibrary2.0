import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InstructionalResource } from 'src/app/data/resource/model/instructional.model';
import { ProfessionalLearningResource } from 'src/app/data/resource/model/professional-learning.model';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-formative',
  templateUrl: './formative.component.html',
  styleUrls: ['./formative.component.scss', '../../printable-section.component.scss']
})
export class FormativeComponent extends PrintableSectionComponent implements AfterViewInit {
  @Input()
  resource: InstructionalResource;

  subsections: DocumentSection[] = [];

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  isProfessional(): boolean {
    return this.resource.type === ResourceType.ProfessionalLearning;
  }

  ngAfterViewInit(): void {
    this.emitSectionLoaded();
  }

  addSubsection(subsection: DocumentSection): void {
    this.subsections.push(subsection);
  }

  emitSectionLoaded(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        title: this.isProfessional() ?  'Formative Assessment Process' : 'Formative Assessment Strategies',
        elementRef: this.headerElement.nativeElement,
        canPrint: true,
        component: this,
        sbdlIcon: 'strategies',
        selectedForPrint: true,
        subsections: this.subsections.length > 1 ? this.subsections : undefined,
        type: DocumentSectionType.Formative
      });
    }
  }
}
