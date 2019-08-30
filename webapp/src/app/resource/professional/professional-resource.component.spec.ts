import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { mockResourceModel } from 'src/app/data/mock-data';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { ResourceModule } from '../resource.module';
import { ProfessionalResourceComponent } from './professional-resource.component';

describe('ProfessionalResourceComponent', () => {
  let component: ProfessionalResourceComponent;
  let fixture: ComponentFixture<ProfessionalResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: mockDataServiceProviders 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalResourceComponent);
    component = fixture.componentInstance;
    component.model = { ...mockResourceModel, resourceType: ResourceType.Professional };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
