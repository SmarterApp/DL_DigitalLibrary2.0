import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { mockResourceModel } from 'src/app/data/mock-data';
import { SbdlCommonModule } from 'src/app/common/common.module';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SbdlCommonModule ],
      declarations: [ OverviewComponent ]
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
