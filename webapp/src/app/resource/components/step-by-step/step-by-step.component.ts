import { Component, OnInit, Input, ViewChildren, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ResourceStepModel } from 'src/app/data/resource/model/resource-step.model';
import { ScrollableSection } from '../outline/scrollable-elements.model';

@Component({
  selector: 'sbdl-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.scss']
})
export class StepByStepComponent implements OnInit, AfterViewInit {

  @Input()
  models: ResourceStepModel[];

  @Output()
  sectionElementLoaded = new EventEmitter<any>();

  @ViewChildren('steps')
  stepElementRefs: ElementRef[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let i = 0;
    if (this.stepElementRefs) {
      const stepRefs = this.stepElementRefs.map(x => <ScrollableSection>{ title: this.models[i++].title, elementRef: x.nativeElement });
      this.sectionElementLoaded.emit(stepRefs);
    }
  }
}
