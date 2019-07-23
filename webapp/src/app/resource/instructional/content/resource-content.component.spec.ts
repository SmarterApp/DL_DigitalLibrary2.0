import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SbdlCommonModule } from 'src/app/common/common.module';
import { mockResourceModel } from 'src/app/data/mock-data';
import { OverviewComponent } from '../overview/overview.component';
import { ResourceContentComponent } from './resource-content.component';

describe('ResourceContentComponent', () => {
  let component: ResourceContentComponent;
  let fixture: ComponentFixture<ResourceContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SbdlCommonModule ],
      declarations: [ ResourceContentComponent, OverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceContentComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Resource Title');
  });
});