import { Component, OnInit, Input, ViewChildren, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ResourceStepModel } from 'src/app/data/resource/model/resource-step.model';

@Component({
  selector: 'sbdl-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.scss']
})
export class StepByStepComponent implements OnInit, AfterViewInit {


  @Input()
  models: ResourceStepModel[];

  @Output()
  sectionElementLoaded= new EventEmitter<any>();

  @ViewChildren('steps')
  stepElementRefs: ElementRef[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.sectionElementLoaded.emit(this.stepElementRefs.map(x => x.nativeElement));
  }

}
