import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, ViewChildren } from '@angular/core';
import { MDCRipple } from '@material/ripple/component';

@Component({
  selector: 'sbdl-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {

  @Input()
  models: any[];

  @Output()
  sectionElementLoaded= new EventEmitter<any>();

  @ViewChild('header', { static: false })
  headerElement: ElementRef;


  @ViewChildren('attachments')
  attachmentElementRefs: ElementRef[];

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    if(this.headerElement) {
      this.sectionElementLoaded.emit(this.headerElement.nativeElement);
    } else {
      this.sectionElementLoaded.emit({});
    }

    // Add ripples
    for(let attachmentRef of this.attachmentElementRefs) {
      MDCRipple.attachTo(attachmentRef.nativeElement);
    }
  }
}
