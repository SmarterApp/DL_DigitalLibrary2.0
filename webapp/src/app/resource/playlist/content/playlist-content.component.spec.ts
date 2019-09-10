import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceModule } from '../../resource.module';
import { PlaylistContentComponent } from './playlist-content.component';

describe('PlaylistContentComponent', () => {
  let component: PlaylistContentComponent;
  let fixture: ComponentFixture<PlaylistContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: [ mockDataServiceProviders ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistContentComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
