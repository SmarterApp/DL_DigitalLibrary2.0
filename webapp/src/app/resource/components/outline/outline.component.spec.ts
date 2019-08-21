import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OutlineComponent } from './outline.component';
import { SbdlCommonModule } from 'src/app/common/common.module';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('OutlineComponent', () => {
  let component: OutlineComponent;
  let fixture: ComponentFixture<OutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SbdlCommonModule ], 
      declarations: [ OutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineComponent);
    component = fixture.componentInstance;
    (<OutlineComponent>component).model = mockResourceModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
