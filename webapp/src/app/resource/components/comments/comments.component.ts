import { Component, OnInit, Input } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';

@Component({
  selector: 'sbdl-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input()
  model: ResourceModel;

  constructor() { }

  ngOnInit() {
  }

}
