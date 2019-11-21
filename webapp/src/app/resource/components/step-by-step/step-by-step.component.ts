import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResourceStep } from 'src/app/data/resource/model/step.model';
import { PrintableSectionComponent } from '../../printable-section.component';
import { DocumentSection, DocumentSectionType } from '../outline/document-outline.model';

@Component({
  selector: 'sbdl-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.scss', '../../printable-section.component.scss']
})
export class StepByStepComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  steps: ResourceStep[];

  private subsections: DocumentSection[] = [];

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  ngAfterViewInit(): void {
      this.emitSectionLoaded();
  }

  addSubsection(subsection: DocumentSection) {
    this.subsections.push(subsection);
    this.emitSectionLoaded();
  }

  private emitSectionLoaded() {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        sbdlIcon: 'steps',
        selectedForPrint: true,
        subsections: this.subsections,
        title: 'Step-by-Step',
        type: DocumentSectionType.StepByStep
      });
    }
  }
}
