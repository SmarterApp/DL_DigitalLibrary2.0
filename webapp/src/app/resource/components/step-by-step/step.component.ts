import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrintableSectionComponent } from '../../printable-section.component';
import { ResourceStep } from '../../../data/resource/model/step.model';
import { DocumentSection, DocumentSectionType } from '../outline/document-outline.model';

@Component({
  selector: 'sbdl-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss', '../../printable-section.component.scss']
})
export class StepComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  stepModel: ResourceStep;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer,
      '--print-position: relative; --print-visibility: visible;',
      '--print-position: fixed; --print-visibility: hidden;');
  }

  ngAfterViewInit() {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        selectedForPrint: true,
        title: this.stepModel.title,
        type: DocumentSectionType.Subsection
      });
    }
  }
}
