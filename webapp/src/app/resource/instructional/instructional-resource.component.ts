import { Component, OnInit } from '@angular/core';
import { ResourceModel } from '../../data/resource/model/resource.model';
import { ResourceComponent } from '../resource-component.interface';

@Component({
  selector: 'sbdl-resource',
  templateUrl: './instructional-resource.component.html',
  styleUrls: ['./instructional-resource.component.scss']
})
export class InstructionalResourceComponent implements OnInit, ResourceComponent {
  model: ResourceModel;
  constructor() { }

  ngOnInit() { }
}
