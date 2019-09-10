import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistComponent } from './playlist.component';
import { ResourceModule } from '../resource.module';
import { mockResourceModel } from 'src/app/data/mock-data';
import { mockDataServiceProviders } from 'src/app/app.module.spec';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: [ mockDataServiceProviders ]
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
