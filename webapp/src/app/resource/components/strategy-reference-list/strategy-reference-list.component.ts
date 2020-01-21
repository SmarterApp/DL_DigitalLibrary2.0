import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResourceStrategyReference } from '../../../data/resource/model/strategy-reference.model';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-strategy-reference-list',
  templateUrl: './strategy-reference-list.component.html',
  styleUrls: ['./strategy-reference-list.component.scss', '../../printable-section.component.scss']
})
export class StrategyReferenceListComponent extends PrintableSectionComponent implements AfterViewInit, OnInit {

  @Input()
  strategies: ResourceStrategyReference[];

  @Input()
  title: string;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, 'strategy-reference-list');
  }

  ngOnInit(): void {
    this.sectionId = this.title.trim();
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        title: this.title,
        component: this,
        canPrint: true,
        selectedForPrint: true,
        elementRef: this.headerElement.nativeElement,
        type: DocumentSectionType.Subsection
      });
    }
  }
}
