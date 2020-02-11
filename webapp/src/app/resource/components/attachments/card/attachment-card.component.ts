import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AttachmentsService} from '../attachments.service';
import {PreviewService} from '../preview/preview.service';
import {FileType, ResourceAttachment} from 'src/app/data/resource/model/attachment.model';
import {CardType} from '../attachments.component';
import {AblePlayerComponent} from 'src/app/resource/components/able-player/able-player.component';

const YT_MATCH_VID = /.*youtube.*v=([^&]+).*$|.*youtu.be\/([^&?]+).*$|.*youtube\/embed\/([^&?]+).*$/;

function extractYouTubeVideoId(attachment: ResourceAttachment): string {
  if (attachment.fileType !== FileType.YouTubeLink) {
    throw new Error('Cannot extract YouTube video ID from attachment type ' + attachment.fileType);
  }

  const matches = attachment.uri.match(YT_MATCH_VID);
  if (!matches) {
    throw new Error('Cannot extract video ID from unrecognized YouTube URL pattern:' + attachment.uri);
  }
  return matches[1] || matches[2] || matches[3];
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
  previewEnabled: boolean;
  youtubeVideoId: string;

  private _attachment: ResourceAttachment;

  @ViewChild(AblePlayerComponent, { static: false })
  private ablePlayer: AblePlayerComponent;

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
    this.previewEnabled = value.fileType === FileType.Image || value.fileType === FileType.Pdf;

    if (value.fileType === FileType.YouTubeLink) {
      this.youtubeVideoId = extractYouTubeVideoId(value);
    }
  }

  download(attachment: ResourceAttachment): void {
    this.attachmentsService.download(attachment);
  }

  preview(attachment: ResourceAttachment): void {
    this.previewService.preview(attachment);
  }

  showPlayer(): void {
    this.ablePlayer.show();
    this.previewMedia = true;
  }

  hidePlayer(): void {
    this.ablePlayer.hide();
    this.previewMedia = false;
  }
}
