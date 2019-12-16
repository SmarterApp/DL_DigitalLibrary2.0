import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';
import { AccessibilityStrategyResource } from 'src/app/data/resource/model/accessibility-strategy.model';

@Component({
  selector: 'sbdl-strategy-in-action-accessibility',
  templateUrl: './strategy-in-action-accessibility.component.html',
  styleUrls: ['./strategy-in-action-accessibility.component.scss', '../../printable-section.component.scss']
})
export class StrategyInActionAccessibilityComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  resource: AccessibilityStrategyResource;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        fontAwesomeIcon: 'fa-universal-access',
        selectedForPrint: true,
        title: 'Strategy In Action',
        type: DocumentSectionType.StrategyInAction
      });
    }
  }

}
