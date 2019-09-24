import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterChipsetComponent } from './filter-chipset.component';

describe('FilterChipsetComponent', () => {
  let component: FilterChipsetComponent;
  let fixture: ComponentFixture<FilterChipsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterChipsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterChipsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
