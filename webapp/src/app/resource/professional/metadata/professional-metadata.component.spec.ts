import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalMetadataComponent } from './professional-metadata.component';
import { ResourceModule } from '../../resource.module';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('ProfessionalMetadataComponent', () => {
  let component: ProfessionalMetadataComponent;
  let fixture: ComponentFixture<ProfessionalMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalMetadataComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.details;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
