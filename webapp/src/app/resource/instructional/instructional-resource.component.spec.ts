import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { mockResourceModel } from '../../data/mock-data';
import { HeaderComponent } from './header/header.component';
import { InstructionalResourceComponent } from './instructional-resource.component';
import { OverviewComponent } from './overview/overview.component';

describe('ResourceComponent', () => {
  let component: InstructionalResourceComponent;
  let fixture: ComponentFixture<InstructionalResourceComponent>;
  const mockResourceActivatedRouteSnapshot = {
      snapshot: { data: { resource: mockResourceModel } } 
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionalResourceComponent, HeaderComponent, OverviewComponent ],
      providers: [ { provide: ActivatedRoute, useValue: mockResourceActivatedRouteSnapshot } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
