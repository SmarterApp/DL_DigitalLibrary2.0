import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';


@Component({
  selector: 'sbdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  model: ResourceModel;

  @Input()
  showGrades = false;

  @Output()
  attachmentsClicked = new EventEmitter();

  get details() {
    return this.model.details;
  }

  constructor() { }

  ngOnInit() {
  }

  emitAttachmentsClicked() {
    this.attachmentsClicked.emit();
  }

}
