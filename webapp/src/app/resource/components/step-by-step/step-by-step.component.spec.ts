import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepByStepComponent } from './step-by-step.component';
import { ResourceModule } from '../../resource.module';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('StepByStepComponent', () => {
  let component: StepByStepComponent;
  let fixture: ComponentFixture<StepByStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepByStepComponent);
    component = fixture.componentInstance;
    component.models = mockResourceModel.steps;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
