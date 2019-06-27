import { Component, OnInit, Input } from '@angular/core';
import { OverviewModel } from 'src/app/data/resource/model/overview.model';

@Component({
  selector: 'sbdl-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input()
  model: OverviewModel;

  constructor() { }

  ngOnInit() {
  }

}
