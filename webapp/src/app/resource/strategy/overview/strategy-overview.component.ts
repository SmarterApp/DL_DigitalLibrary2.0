import { Component, Input, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AccessibilityStrategyResource } from 'src/app/data/resource/model/accessibility-strategy.model';
import { FormativeStrategyResource } from 'src/app/data/resource/model/formative-strategy.model';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-strategy-overview',
  templateUrl: './strategy-overview.component.html',
  styleUrls: ['./strategy-overview.component.scss', '../../printable-section.component.scss']
})
export class StrategyOverviewComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  resource: FormativeStrategyResource | AccessibilityStrategyResource;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, DocumentSectionType.Overview);
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        fontAwesomeIcon: 'fa-hand-point-right',
        selectedForPrint: true,
        title: 'Overview',
        type: DocumentSectionType.Overview
      });
    }
  }

}
