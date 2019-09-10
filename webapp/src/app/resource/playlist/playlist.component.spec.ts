import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistComponent } from './playlist.component';
import { ResourceModule } from '../resource.module';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
