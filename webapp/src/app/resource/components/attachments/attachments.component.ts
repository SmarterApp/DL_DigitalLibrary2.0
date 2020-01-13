import { AfterViewInit, ElementRef, Component, Input, SecurityContext, ViewChildren } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MDCRipple } from '@material/ripple/component';
import { ResourceAttachment } from 'src/app/data/resource/model/attachment.model';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';

@Component({
  selector: 'sbdl-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss', '../../printable-section.component.scss']
})
export class AttachmentsComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  attachments: ResourceAttachment[];

  @ViewChildren('attachments')
  attachmentElementRefs: ElementRef[];

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, DocumentSectionType.Attachments);
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: false,
        component: this,
        elementRef: this.headerElement.nativeElement,
        fontAwesomeIcon: 'fa-paperclip',
        selectedForPrint: false,
        title: 'Attachments',
        type: DocumentSectionType.Attachments
      });
    }

    // Add ripples
    for (const attachmentRef of this.attachmentElementRefs) {
      MDCRipple.attachTo(attachmentRef.nativeElement);
    }
  }
}
