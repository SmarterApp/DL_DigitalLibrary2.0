import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InstructionalResource } from 'src/app/data/resource/model/instructional.model';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss', '../../printable-section.component.scss']
})
export class GetStartedComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  resource: InstructionalResource;

  @Output()
  sectionLoaded = new EventEmitter<DocumentSection>();

  @ViewChild('header', { static: false })
  headerElement: ElementRef;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        fontAwesomeIcon: 'fa-hand-point-right',
        selectedForPrint: true,
        title: 'Get Started',
        type: DocumentSectionType.Overview
      });
    }
  }
}
