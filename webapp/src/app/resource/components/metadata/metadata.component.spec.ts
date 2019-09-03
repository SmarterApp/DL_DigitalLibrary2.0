import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataComponent } from './metadata.component';
import { ResourceModule } from '../../resource.module';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

describe('MetadataComponent', () => {
  let component: MetadataComponent;
  let fixture: ComponentFixture<MetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: mockDataServiceProviders
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.details;
    component.resourceType = ResourceType.FormativeStrategy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
