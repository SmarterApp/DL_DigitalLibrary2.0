import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistOverviewComponent } from './playlist-overview.component';
import { ResourceModule } from '../../resource.module';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('PlaylistOverviewComponent', () => {
  let component: PlaylistOverviewComponent;
  let fixture: ComponentFixture<PlaylistOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistOverviewComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.overview;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
