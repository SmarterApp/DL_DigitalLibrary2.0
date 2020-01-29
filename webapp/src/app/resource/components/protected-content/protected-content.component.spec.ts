import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedContentComponent } from './protected-content.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ProtectedContentComponent', () => {
  let component: ProtectedContentComponent;
  let fixture: ComponentFixture<ProtectedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectedContentComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
