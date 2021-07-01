import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalRemoteComponent } from './instructional-remote.component';

describe('InstructionalRemoteComponent', () => {
  let component: InstructionalRemoteComponent;
  let fixture: ComponentFixture<InstructionalRemoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionalRemoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
