import {Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

declare var jQuery: any;
declare function AblePlayer(jqObj: any): void;

@Component({
  selector: 'sbdl-able-player',
  templateUrl: './able-player.component.html'
})
export class AblePlayerComponent implements OnDestroy {

  @Input()
  youtubeVideoId: string;

  @ViewChild('video', { static: false })
  private videoElem: ElementRef;

  private ablePlayerInst: any;

  constructor() { }

  show() {
    if (!this.ablePlayerInst) {
      const $videoElem = jQuery(this.videoElem.nativeElement);
      this.ablePlayerInst = new AblePlayer($videoElem);
    }
  }

  hide() {
    if (this.ablePlayerInst) {
      this.ablePlayerInst.pauseMedia();
      this.ablePlayerInst.youTubePlayer.pauseVideo();
      this.ablePlayerInst.youTubePlayer.stopVideo();
    }
  }

  ngOnDestroy() {
  }
}