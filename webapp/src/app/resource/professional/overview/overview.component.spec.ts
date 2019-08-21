import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { ResourceModule } from '../../resource.module';
import { mockApiProfResourceExample, mockResourceModel } from 'src/app/data/mock-data';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.overview;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
