import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalPlaylistsComponent } from './instructional-playlists.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('InstructionalPlaylistsComponent', () => {
  let component: InstructionalPlaylistsComponent;
  let fixture: ComponentFixture<InstructionalPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionalPlaylistsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
