import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { mockResourceModel } from '../data/mock-data';
import { HeaderComponent } from './header/header.component';
import { ResourceComponent } from './resource.component';

describe('ResourceComponent', () => {
  let component: ResourceComponent;
  let fixture: ComponentFixture<ResourceComponent>;
  const mockResourceActivatedRouteSnapshot = {
      snapshot: { data: { resource: mockResourceModel } } 
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceComponent, HeaderComponent ],
      providers: [ { provide: ActivatedRoute, useValue: mockResourceActivatedRouteSnapshot } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
