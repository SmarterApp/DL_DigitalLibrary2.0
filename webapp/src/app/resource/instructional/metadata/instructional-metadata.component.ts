import { Component, OnInit, Input } from '@angular/core';
import { ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';

@Component({
  selector: 'sbdl-instructional-metadata',
  templateUrl: './instructional-metadata.component.html',
  styleUrls: ['./instructional-metadata.component.scss']
})
export class InstructionalMetadataComponent implements OnInit {

  @Input()
  model: ResourceDetailsModel;

  constructor() { }

  ngOnInit() {
  }
}
