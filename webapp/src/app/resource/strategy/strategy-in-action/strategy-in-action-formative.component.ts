import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';
import { FormativeStrategyResource } from 'src/app/data/resource/model/formative-strategy.model';

@Component({
  selector: 'sbdl-strategy-in-action-formative',
  templateUrl: './strategy-in-action-formative.component.html',
  styleUrls: ['./strategy-in-action-formative.component.scss', '../../printable-section.component.scss']
})
export class StrategyInActionFormativeComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  resource: FormativeStrategyResource;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        sbdlIcon: 'strategies',
        selectedForPrint: true,
        title: 'Strategy In Action',
        type: DocumentSectionType.StrategyInAction
      });
    }
  }

}
