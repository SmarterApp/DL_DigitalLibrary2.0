import {Component, ElementRef, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

declare var jQuery: any;
declare function AblePlayer(jqObj: any): void;

// AblePlayer version number 4.3
// AblePlayer version number 4.3
// AblePlayer version number 4.3

@Component({
  selector: 'sbdl-able-player-float-ts',
  templateUrl: './able-player-float-ts.component.html',
  styleUrls: ['./able-player-float-ts.component.scss']
})
export class AblePlayerComponentFloatTS implements AfterViewInit {

  @Input() youtubeVideoId: string;

  @ViewChild('video', { static: false })
  private videoElem: ElementRef;

  private ablePlayerInst: any;

  constructor() { 
   }

  show() {
    if (!this.ablePlayerInst) {
      const $videoElem = jQuery(this.videoElem.nativeElement);
      this.ablePlayerInst = new AblePlayer($videoElem);
    }
  }

  ngAfterViewInit() {
    this.show();
  }
  
}
