import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingActionsComponent } from './landing-actions.component';

describe('LandingActionsComponent', () => {
  let component: LandingActionsComponent;
  let fixture: ComponentFixture<LandingActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
