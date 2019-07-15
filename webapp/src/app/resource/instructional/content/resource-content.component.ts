import { Component, OnInit, Input } from '@angular/core';
import { ResourceHeaderModel } from 'src/app/data/resource/model/resource-header.model';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';

@Component({
  selector: 'sbdl-resource-content',
  templateUrl: './resource-content.component.html',
  styleUrls: ['./resource-content.component.scss']
})
export class ResourceContentComponent implements OnInit {

  @Input()
  model: ResourceModel;

  get header() {
    return this.model.header;
  }

  constructor() { }

  ngOnInit() {
  }

}
