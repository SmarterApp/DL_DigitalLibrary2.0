import { AfterViewInit, ElementRef, Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileType, ResourceAttachment } from 'src/app/data/resource/model/attachment.model';
import { DocumentSection, DocumentSectionType } from 'src/app/resource/components/outline/document-outline.model';
import { PrintableSectionComponent } from 'src/app/resource/printable-section.component';

export enum CardType { File, Media, Link }

@Component({
  selector: 'sbdl-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss', '../../printable-section.component.scss']
})
export class AttachmentsComponent extends PrintableSectionComponent implements AfterViewInit, OnInit {

  @Input()
  attachments: ResourceAttachment[];

  fileAttachments: ResourceAttachment[] = [];
  mediaAttachments: ResourceAttachment[] = [];
  linkAttachments: ResourceAttachment[] = [];
  CardType = CardType;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer, DocumentSectionType.Attachments);
  }

  ngOnInit(): void {
    this.attachments.forEach(a => {
      switch (a.fileType) {
        case FileType.VideoLink:
        case FileType.VimeoLink:
        case FileType.YouTubeLink:
        case FileType.Audio:
          this.mediaAttachments.push(a);
          break;
        case FileType.ExternalLink:
          this.linkAttachments.push(a);
          break;
        default:
          this.fileAttachments.push(a);
          break;
      }
    });
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
  }

}
