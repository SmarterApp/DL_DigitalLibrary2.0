import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceModule } from '../../resource.module';
import { InstructionalMetadataComponent } from './instructional-metadata.component';

describe('InstructionalMetadataComponent', () => {
  let component: InstructionalMetadataComponent;
  let fixture: ComponentFixture<InstructionalMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalMetadataComponent);
    component = fixture.componentInstance;
    (<InstructionalMetadataComponent>component).model = mockResourceModel.details;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
