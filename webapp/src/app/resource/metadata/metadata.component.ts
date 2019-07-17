import { Component, OnInit, Input } from '@angular/core';
import { ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';

@Component({
  selector: 'sbdl-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {

  @Input()
  model: ResourceDetailsModel;

  constructor() { }

  ngOnInit() {
    console.log(this.model.relatedPlaylists);
  }

}
