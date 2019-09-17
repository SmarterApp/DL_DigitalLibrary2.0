import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ResourceContentComponent } from '../../resource-content.component';

@Component({
  selector: 'sbdl-playlist-content',
  templateUrl: './playlist-content.component.html',
  styleUrls: ['./../../resource-content.component.scss', './playlist-content.component.scss']
})
export class PlaylistContentComponent extends ResourceContentComponent implements AfterViewInit {

  @ViewChild('assessmentInfo', { static: true })
  asmtInfoRef: ElementRef;

  ngAfterViewInit(): void {
    if(this.asmtInfoRef) {
      this.setAssessmentInfo(this.asmtInfoRef.nativeElement)
    }
  }

  constructor() { 
    super();
  }
}
