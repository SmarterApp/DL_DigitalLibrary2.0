import {Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

declare var jQuery: any;
declare function AblePlayer(jqObj: any): void;

@Component({
  selector: 'sbdl-able-player',
  templateUrl: './able-player.component.html',
  styleUrls: ['./able-player.component.scss']
})
export class AblePlayerComponent implements OnDestroy {

  @Input()
  youtubeVideoId: string;

  @Input()
  isTranscriptVisable: boolean;

  @ViewChild('video', { static: false })
  private videoElem: ElementRef;

  @ViewChild('transcriptArea', { static: false }) targetElement: any;    
  result: string;

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

  testTranscript(): boolean {
        const transcriptText: string = this.targetElement.nativeElement.innerHTML;
        return transcriptText.length > 0;
  }

}
