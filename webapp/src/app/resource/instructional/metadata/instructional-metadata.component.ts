import { Component, OnInit, Input, ViewChildren, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'sbdl-instructional-metadata',
  templateUrl: './instructional-metadata.component.html',
  styleUrls: ['./instructional-metadata.component.scss']
})
export class InstructionalMetadataComponent implements OnInit, AfterViewInit {

  @Input()
  model: ResourceDetailsModel;

  @ViewChildren('playlistRef')
  playlists: ElementRef[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Add ripples
    for(let playlist of this.playlists) {
      MDCRipple.attachTo(playlist.nativeElement);
    }
  }
}
