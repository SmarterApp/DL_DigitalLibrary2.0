import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceModule } from '../../resource.module';
import { DetailedMetadataComponent } from './detailed-metadata.component';

describe('InstructionalMetadataComponent', () => {
  let component: DetailedMetadataComponent;
  let fixture: ComponentFixture<DetailedMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedMetadataComponent);
    component = fixture.componentInstance;
    (<DetailedMetadataComponent>component).model = mockResourceModel.details;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
