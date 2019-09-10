import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { MDCRipple } from '@material/ripple';
import { ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';

@Component({
  selector: 'sbdl-detailed-metadata',
  templateUrl: './detailed-metadata.component.html',
  styleUrls: ['./detailed-metadata.component.scss']
})
export class DetailedMetadataComponent implements OnInit, AfterViewInit {

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
