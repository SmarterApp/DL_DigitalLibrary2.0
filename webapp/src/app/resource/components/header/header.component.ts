import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Resource } from 'src/app/data/resource/model/resource.model';
import { Grade } from 'src/app/data/resource/model/grade.model';

@Component({
  selector: 'sbdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  resource: Resource;

  @Input()
  showIconsCol = false;

  @Output()
  attachmentsClicked = new EventEmitter();

  grade: Grade;
  fullUrl: string;

  get properties() {
    return this.resource.properties;
  }

  constructor() { }

  ngOnInit() {
    if (this.showIconsCol && this.resource.properties.grades.length > 0) {
      this.grade = this.resource.properties.grades[0];
    }

    this.fullUrl = window.location.href;
  }

  emitAttachmentsClicked() {
    this.attachmentsClicked.emit();
  }

}
