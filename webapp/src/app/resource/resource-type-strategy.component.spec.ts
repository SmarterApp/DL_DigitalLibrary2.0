import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceTypeStrategyComponent } from './resource-type-strategy.component';
import { ResourceModule } from './resource.module';
import { ActivatedResourceRouteModule } from './resource.module.spec';
import { mockDataServiceProviders } from '../app.module.spec';

describe('ResourceTypeStrategyComponent', () => {
  let component: ResourceTypeStrategyComponent;
  let fixture: ComponentFixture<ResourceTypeStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResourceModule ],
      providers: [ ActivatedResourceRouteModule, ...mockDataServiceProviders ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceTypeStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
