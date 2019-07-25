import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceComponent } from '../resource-component.interface';
import { ResourceModule } from '../resource.module';
import { InstructionalResourceComponent } from './instructional-resource.component';
import { mockDataServiceProviders } from 'src/app/app.module.spec';

describe('InstructionalResourceComponent', () => {
  let component: InstructionalResourceComponent;
  let fixture: ComponentFixture<InstructionalResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: mockDataServiceProviders 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalResourceComponent);
    component = fixture.componentInstance;
    (<ResourceComponent>component).model = mockResourceModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
