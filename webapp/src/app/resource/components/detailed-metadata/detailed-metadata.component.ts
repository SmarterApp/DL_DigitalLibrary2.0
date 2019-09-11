import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { MDCRipple } from '@material/ripple';
import { ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';
import { MetadataComponentService } from '../metadata/metadata-component.service';
import { DetailedMetadataComponentService } from './detailed-metadata-component.service';

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
  
  @ViewChildren('resourceRef')
  resources: ElementRef[];

  claimImagePath: string;
  
  constructor(private service: DetailedMetadataComponentService) { }

  ngOnInit() {
    if(this.model.subjects.length > 0 && this.model.claims.length > 0) {
      this.claimImagePath = this.service.getClaimImagePath(this.model.subjects[0], this.model.claims[0].shortName);
    }
  }

  ngAfterViewInit(): void {
    // Add ripples
    for(let playlist of this.playlists) {
      MDCRipple.attachTo(playlist.nativeElement);
    }
    for(let resource of this.resources) {
      MDCRipple.attachTo(resource.nativeElement);
    }
  }
}
