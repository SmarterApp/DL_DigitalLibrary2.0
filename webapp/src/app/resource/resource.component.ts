import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceModel } from '../data/resource/model/resource.model';

@Component({
  selector: 'sbdl-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  model: ResourceModel = <ResourceModel>{};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.model = this.route.snapshot.data.resource;
  }

}
