import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input,
  OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/data/data.service';
import { ResourceAttachment } from 'src/app/data/resource/model/attachment.model';
import { ButtonComponent } from 'src/app/common/controls/button/button.component';
import { AttachmentsService } from '../attachments.service';

@Component({
  selector: 'sbdl-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements AfterViewInit, OnDestroy, OnInit {

  @Input()
  attachment: ResourceAttachment;

  @Output()
  onClose = new EventEmitter<boolean>();

  @ViewChild('closeButton', { static: false })
  closeButton: ButtonComponent;

  blobUrl: string;
  loading = true;
  previousActiveElement: HTMLElement;

  @HostListener('window:keyup', ['$event'])
  handleEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  constructor(
    private attachmentsService: AttachmentsService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService
      .downloadBlob(this.attachment.uri)
      .subscribe(blob => {
        const typedBlob = new Blob([blob], {type: this.attachment.mimeType});
        this.blobUrl = window.URL.createObjectURL(typedBlob);
        this.loading = false;
      });
  }

  ngAfterViewInit(): void {
    this.previousActiveElement = document.activeElement as HTMLElement;
    this.closeButton.focus();
  }

  ngOnDestroy(): void {
    window.URL.revokeObjectURL(this.blobUrl);
  }

  onCloseButtonClick(): void {
    this.close();
  }

  onDownloadButtonClick(attachment: ResourceAttachment): void {
    this.attachmentsService.download(attachment);
  }

  private close(): void {
    this.onClose.emit(true);
    if (this.previousActiveElement != null) {
      this.previousActiveElement.focus();
    }
  }
}
