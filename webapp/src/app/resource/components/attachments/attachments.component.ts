import {
  AfterViewInit, Component, OnInit, Input, ViewChild, ElementRef,
  Output, EventEmitter, ViewChildren, SecurityContext } from '@angular/core';
import { MDCRipple } from '@material/ripple/component';
import { ResourceAttachment } from 'src/app/data/resource/model/attachment.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'sbdl-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements AfterViewInit, OnInit {

  @Input()
  attachments: ResourceAttachment[];

  @Input()
  videoLinks: string[];

  @Output()
  sectionElementLoaded = new EventEmitter<any>();

  @ViewChild('header', { static: false })
  headerElement: ElementRef;

  @ViewChildren('attachments')
  attachmentElementRefs: ElementRef[];

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionElementLoaded.emit(this.headerElement.nativeElement);
    }
    // Add ripples
    for (const attachmentRef of this.attachmentElementRefs) {
      MDCRipple.attachTo(attachmentRef.nativeElement);
    }
  }
}
