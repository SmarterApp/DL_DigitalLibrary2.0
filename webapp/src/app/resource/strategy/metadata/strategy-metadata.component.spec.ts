import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyMetadataComponent } from './strategy-metadata.component';
import { ResourceModule } from '../../resource.module';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

describe('StrategyMetadataComponent', () => {
  let component: StrategyMetadataComponent;
  let fixture: ComponentFixture<StrategyMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: mockDataServiceProviders
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyMetadataComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.details;
    component.resourceType = ResourceType.FormativeStrategy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
