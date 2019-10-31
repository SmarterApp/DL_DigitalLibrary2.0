import { Component, OnInit, Input, ViewChildren, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ResourceStep } from 'src/app/data/resource/model/step.model';
import { ScrollableSection } from '../outline/scrollable-elements.model';

@Component({
  selector: 'sbdl-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.scss']
})
export class StepByStepComponent implements OnInit, AfterViewInit {

  @Input()
  steps: ResourceStep[];

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
      const stepRefs = this.stepElementRefs.map(x => ({ title: this.steps[i++].title, elementRef: x.nativeElement } as ScrollableSection));
      this.sectionElementLoaded.emit(stepRefs);
    }
  }
}
