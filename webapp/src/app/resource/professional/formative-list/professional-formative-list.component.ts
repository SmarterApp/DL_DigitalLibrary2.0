import { AfterViewInit, Component, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResourceStrategyReference } from 'src/app/data/resource/model/strategy-reference.model';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-professional-formative-list',
  templateUrl: './professional-formative-list.component.html',
  styleUrls: ['./professional-formative-list.component.scss', '../../printable-section.component.scss']
})
export class ProfessionalFormativeListComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  strategies: ResourceStrategyReference;

  @ViewChild('header', { static: false })
  headerElement: ElementRef;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, DocumentSectionType.Formative);
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        elementRef: this.headerElement.nativeElement,
        canPrint: true,
        component: this,
        selectedForPrint: true,
        sbdlIcon: 'strategies',
        title: 'Formative Assessment Strategies',
        type: DocumentSectionType.Formative
      });
    }
  }
}
