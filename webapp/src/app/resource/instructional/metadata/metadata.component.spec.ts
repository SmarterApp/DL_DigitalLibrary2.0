import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceModule } from '../../resource.module';
import { MetadataComponent } from './metadata.component';

describe('MetadataComponent', () => {
  let component: MetadataComponent;
  let fixture: ComponentFixture<MetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataComponent);
    component = fixture.componentInstance;
    (<MetadataComponent>component).model = mockResourceModel.details;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
