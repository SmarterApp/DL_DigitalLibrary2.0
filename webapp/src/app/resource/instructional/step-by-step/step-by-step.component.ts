import { Component, OnInit, Input } from '@angular/core';
import { ResourceStepModel } from 'src/app/data/resource/model/resource-step.model';

@Component({
  selector: 'sbdl-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.scss']
})
export class StepByStepComponent implements OnInit {

  @Input()
  models: ResourceStepModel[];

  constructor() { }

  ngOnInit() {
  }

}
