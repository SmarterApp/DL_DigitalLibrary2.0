import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceModule } from '../../resource.module';
import { FormativeComponent } from './formative.component';


describe('FormativeComponent', () => {
  let component: FormativeComponent;
  let fixture: ComponentFixture<FormativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormativeComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.formative;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
