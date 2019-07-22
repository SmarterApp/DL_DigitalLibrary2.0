import { Component, OnInit, Input } from '@angular/core';
import { ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';

@Component({
  selector: 'sbdl-resource-content',
  templateUrl: './resource-content.component.html',
  styleUrls: ['./resource-content.component.scss']
})
export class ResourceContentComponent implements OnInit {

  @Input()
  model: ResourceModel;

  get details() {
    return this.model.details;
  }

  constructor() { }

  ngOnInit() {
  }

}
