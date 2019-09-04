import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyComponent } from './strategy.component';
import { ResourceModule } from '../resource.module';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

describe('StrategyComponent', () => {
  let component: StrategyComponent;
  let fixture: ComponentFixture<StrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: mockDataServiceProviders
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyComponent);
    component = fixture.componentInstance;
    component.model = { ...mockResourceModel, resourceType: ResourceType.FormativeStrategy };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});