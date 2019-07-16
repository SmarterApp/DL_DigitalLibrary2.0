import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceModule } from '../resource.module';
import { ActivatedResourceRouteModule } from '../resource.module.spec';
import { InstructionalResourceComponent } from './instructional-resource.component';
import { ResourceComponent } from '../resource-component.interface';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('InstructionalResourceComponent', () => {
  let component: InstructionalResourceComponent;
  let fixture: ComponentFixture<InstructionalResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: [  ]
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
