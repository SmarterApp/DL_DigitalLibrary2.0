import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentiationComponent } from './differentiation.component';
import { ResourceModule } from '../../resource.module';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('DifferentiationComponent', () => {
  let component: DifferentiationComponent;
  let fixture: ComponentFixture<DifferentiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentiationComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.differentiation;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
