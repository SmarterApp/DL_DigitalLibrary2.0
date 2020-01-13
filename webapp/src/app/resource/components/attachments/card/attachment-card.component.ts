import { AfterViewInit, ElementRef, Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AttachmentsService } from '../attachments.service';
import { PreviewService } from '../preview/preview.service';
import { FileType, ResourceAttachment } from 'src/app/data/resource/model/attachment.model';
import { CardType } from '../attachments.component';

const YT_MATCH_VID = /.*youtube.*v=([^&]+).*$/;
const YT_EMBED_URL = /youtube\/embed/;

@Component({
  selector: 'sbdl-attachment-card',
  templateUrl: './attachment-card.component.html',
  styleUrls: ['./attachment-card.component.scss']
})
export class AttachmentCardComponent implements OnInit {

  @Input()
  attachment: ResourceAttachment;

  @Input()
  attachmentCardType: CardType;

  previewMedia = false;
  embeddableUrl: SafeResourceUrl;
  fileTypes = FileType;
  CardType = CardType; // Alias so the template can see it
  FileType = FileType;

  constructor(private sanitizer: DomSanitizer,
              private attachmentsService: AttachmentsService,
              private previewService: PreviewService) { }

  ngOnInit(): void {
    if (this.attachment.fileType === FileType.YouTubeLink &&
        !this.attachment.uri.match(YT_EMBED_URL)) {
      const m = this.attachment.uri.match(YT_MATCH_VID);
      if (!m) {
        // TODO: placeholder and error message if not a YT URL
      }
      this.embeddableUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${m[1]}`);
    } else {
      this.embeddableUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.attachment.uri);
    }
  }

  canPreview(fileType: FileType) {
    switch (fileType) {
      case FileType.Image:
      case FileType.Pdf:
        return true;
      default: return false;
    }
  }

  download(attachment: ResourceAttachment): void {
    this.attachmentsService.download(attachment);
  }

  preview(attachment: ResourceAttachment): void {
    this.previewService.preview(attachment);
  }
}
