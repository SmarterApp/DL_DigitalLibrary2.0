import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyOverviewComponent } from './strategy-overview.component';
import { ResourceModule } from '../../resource.module';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('StrategyOverviewComponent', () => {
  let component: StrategyOverviewComponent;
  let fixture: ComponentFixture<StrategyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyOverviewComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.overview;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
