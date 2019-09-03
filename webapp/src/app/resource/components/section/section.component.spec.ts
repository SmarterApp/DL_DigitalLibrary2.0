import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from './section.component';
import { ResourceModule } from '../../resource.module';
import { mockResourceModel } from 'src/app/data/mock-data';
import { commentsSectionOptions } from './section.definitions';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    component.contentHtml = mockResourceModel.comments;
    component.options = commentsSectionOptions;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
