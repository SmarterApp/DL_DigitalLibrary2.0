import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrintableSectionComponent } from '../../printable-section.component';
import { ResourceStep } from '../../../data/resource/model/step.model';
import { DocumentSectionType } from '../outline/document-outline.model';

@Component({
  selector: '[sbdl-step]',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss', '../../printable-section.component.scss']
})
export class StepComponent extends PrintableSectionComponent implements AfterViewInit, OnInit {

  @Input()
  stepModel: ResourceStep;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, '', {
      baseStyle: '--print-display: list-item',
      printSelected: '--print-position: relative; --print-visibility: visible;',
      printHidden: '--print-position: fixed; --print-visibility: hidden;'
    });
  }

  ngOnInit() {
    this.sectionId = `step-${this.stepModel.orderingIndex}`;
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
