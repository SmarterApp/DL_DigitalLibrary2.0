import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AttachmentsService} from '../attachments.service';
import {PreviewService} from '../preview/preview.service';
import {FileType, ResourceAttachment} from 'src/app/data/resource/model/attachment.model';
import {CardType} from '../attachments.component';

const YT_MATCH_VID = /.*youtube.*v=([^&]+).*$|.*youtu.be\/([^&?]+).*$/;
const YT_EMBED_URL = /youtube\/embed/;

function attachmentToEmbedUrl(attachment: ResourceAttachment): string {
  if (
    attachment.fileType === FileType.YouTubeLink &&
    !attachment.uri.match(YT_EMBED_URL)
  ) {
    const matches = attachment.uri.match(YT_MATCH_VID);
    if (!matches) {
      // TODO: placeholder and error message if not a YT URL
    }
    return `https://www.youtube.com/embed/${matches[1] || matches[2]}`;
  }
  return attachment.uri;
}

@Component({
  selector: 'sbdl-attachment-card',
  templateUrl: './attachment-card.component.html',
  styleUrls: ['./attachment-card.component.scss']
})
export class AttachmentCardComponent {
  readonly CardType = CardType;
  readonly FileType = FileType;

  @Input()
  attachmentCardType: CardType;

  previewMedia = false;
  fileName: string;
  embedUrl: string;
  previewEnabled: boolean;

  private _attachment: ResourceAttachment;

  constructor(
    private sanitizer: DomSanitizer,
    private attachmentsService: AttachmentsService,
    private previewService: PreviewService
  ) {}

  get attachment(): ResourceAttachment {
    return this._attachment;
  }

  @Input()
  set attachment(value: ResourceAttachment) {
    this._attachment = value;
    this.fileName = `${value.name}.${value.fileExtension}`;
    this.embedUrl = attachmentToEmbedUrl(value);
    this.previewEnabled = value.fileType === FileType.Image || value.fileType === FileType.Pdf;
  }

  download(attachment: ResourceAttachment): void {
    this.attachmentsService.download(attachment);
  }

  preview(attachment: ResourceAttachment): void {
    this.previewService.preview(attachment);
  }
}
