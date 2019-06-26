import { Component, OnInit, Input } from '@angular/core';
import { ResourceHeaderModel } from 'src/app/data/resource/model/resource-header.model';

@Component({
  selector: 'sbdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  model: ResourceHeaderModel;

  constructor() { }

  ngOnInit() {
  }

}
