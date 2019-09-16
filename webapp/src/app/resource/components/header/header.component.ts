import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  showIconsCol = false;

  @Output()
  attachmentsClicked = new EventEmitter();

  grade: number;

  get details() {
    return this.model.details;
  }

  constructor() { }

  ngOnInit() {
    if(this.showIconsCol && this.model.details.grades.length > 0) {
      this.grade = this.model.details.grades[0];
    }
  }

  emitAttachmentsClicked() {
    this.attachmentsClicked.emit();
  }
  
}
