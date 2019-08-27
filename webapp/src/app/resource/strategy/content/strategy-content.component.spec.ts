import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyContentComponent } from './strategy-content.component';
import { ResourceModule } from '../../resource.module';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('StrategyContentComponent', () => {
  let component: StrategyContentComponent;
  let fixture: ComponentFixture<StrategyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: mockDataServiceProviders
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyContentComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
