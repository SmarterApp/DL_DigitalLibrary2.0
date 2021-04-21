import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSampleItemsComponent } from './landing-sample-items.component';

describe('LandingSampleItemsComponent', () => {
  let component: LandingSampleItemsComponent;
  let fixture: ComponentFixture<LandingSampleItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSampleItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSampleItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
