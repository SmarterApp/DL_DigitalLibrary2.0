import { Component, Input, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfessionalLearningResource } from 'src/app/data/resource/model/professional-learning.model';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss', '../../printable-section.component.scss']
})
export class OverviewComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  resource: ProfessionalLearningResource;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        elementRef: this.headerElement.nativeElement,
        component: this,
        canPrint: true,
        selectedForPrint: true,
        title: 'Overview',
        type: DocumentSectionType.Overview
      });
    }
  }

}
