import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentiationComponent } from './differentiation.component';

describe('DifferentiationComponent', () => {
  let component: DifferentiationComponent;
  let fixture: ComponentFixture<DifferentiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
