import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDiveDeeperComponent } from './landing-dive-deeper.component';

describe('LandingDiveDeeperComponent', () => {
  let component: LandingDiveDeeperComponent;
  let fixture: ComponentFixture<LandingDiveDeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingDiveDeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingDiveDeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
