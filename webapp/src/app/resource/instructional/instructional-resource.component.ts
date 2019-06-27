import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceModel } from '../../data/resource/model/resource.model';
import { ResourceComponent } from '../resource-component.interface';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

@Component({
  selector: 'sbdl-resource',
  templateUrl: './instructional-resource.component.html',
  styleUrls: ['./instructional-resource.component.scss']
})
export class InstructionalResourceComponent implements OnInit, ResourceComponent {
  appliesTo(resourceType: ResourceType): boolean {
    return resourceType === ResourceType.Instructional;
  }

  model: ResourceModel = <ResourceModel>{};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.model = this.route.snapshot.data.resource;
  }

}
