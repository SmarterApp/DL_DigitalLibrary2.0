import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalResourceComponent } from './professional-resource.component';

describe('ProfessionalResourceComponent', () => {
  let component: ProfessionalResourceComponent;
  let fixture: ComponentFixture<ProfessionalResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
