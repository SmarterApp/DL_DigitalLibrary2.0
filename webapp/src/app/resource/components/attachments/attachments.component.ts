import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, ViewChildren, SecurityContext } from '@angular/core';
import { MDCRipple } from '@material/ripple/component';
import { AttachmentModel } from 'src/app/data/resource/model/attachment.model';
import { AttachmentService } from 'src/app/data/resource/attachment.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'sbdl-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {

  @Input()
  models: AttachmentModel[];

  @Input()
  videoLinks: string[];

  @Output()
  sectionElementLoaded= new EventEmitter<any>();

  @ViewChild('header', { static: false })
  headerElement: ElementRef;

  @ViewChildren('attachments')
  attachmentElementRefs: ElementRef[];

  constructor(private service: AttachmentService) { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    if(this.headerElement) {
      this.sectionElementLoaded.emit(this.headerElement.nativeElement);
    }
    // Add ripples
    for(let attachmentRef of this.attachmentElementRefs) {
      MDCRipple.attachTo(attachmentRef.nativeElement);
    }
  }

  download(attachment: AttachmentModel) {
    this.service
      .download(attachment.id)
      .subscribe(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = attachment.filename;
        link.hidden = true;
        document.body.appendChild(link);
        link.click();
        setTimeout(function() {
          window.URL.revokeObjectURL(link.href);
          document.body.removeChild(link);
        }, 100);
      })
  }
}
