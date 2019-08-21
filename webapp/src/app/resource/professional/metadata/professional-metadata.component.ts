import { Component, OnInit, Input } from '@angular/core';
import { ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';

@Component({
  selector: 'sbdl-professional-metadata',
  templateUrl: './professional-metadata.component.html',
  styleUrls: ['./professional-metadata.component.scss']
})
export class ProfessionalMetadataComponent implements OnInit {
  @Input()
  model: ResourceDetailsModel;

  constructor() { }

  ngOnInit() {
  }

}
