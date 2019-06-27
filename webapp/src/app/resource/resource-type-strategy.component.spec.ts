import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTypeStrategyComponent } from './resource-type-strategy.component';

describe('ResourceTypeStrategyComponent', () => {
  let component: ResourceTypeStrategyComponent;
  let fixture: ComponentFixture<ResourceTypeStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceTypeStrategyComponent ]
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
