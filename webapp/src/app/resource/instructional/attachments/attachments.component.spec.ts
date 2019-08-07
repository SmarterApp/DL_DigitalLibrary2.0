import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceModule } from '../../resource.module';
import { AttachmentsComponent } from './attachments.component';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('AttachmentsComponent', () => {
  let component: AttachmentsComponent;
  let fixture: ComponentFixture<AttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentsComponent);
    component = fixture.componentInstance;
    component.models = mockResourceModel.attachments;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
