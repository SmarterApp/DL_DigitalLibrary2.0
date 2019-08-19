import { Component, OnInit } from '@angular/core';
import { ResourceComponent } from '../resource-component.interface';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';

@Component({
  selector: 'sbdl-professional-resource',
  templateUrl: './professional-resource.component.html',
  styleUrls: ['./professional-resource.component.scss']
})
export class ProfessionalResourceComponent implements OnInit, ResourceComponent {
  model: ResourceModel;

  constructor() { }

  ngOnInit() {
  }

}
