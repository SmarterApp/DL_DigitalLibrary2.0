import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedComponent } from './get-started.component';
import { mockResourceModel } from 'src/app/data/mock-data';
import { SbdlCommonModule } from 'src/app/common/common.module';

describe('GetStartedComponent', () => {
  let component: GetStartedComponent;
  let fixture: ComponentFixture<GetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SbdlCommonModule ],
      declarations: [ GetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.overview;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
