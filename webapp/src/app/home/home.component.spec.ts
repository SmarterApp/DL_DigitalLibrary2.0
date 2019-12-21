import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
import { SearchFilters } from '../data/search/search-filters.model';
import { SearchModule } from '../search/search.module';
import { ResourceModule } from '../resource/resource.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ResourceModule, SearchModule ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { data: { filters: [] } } } },
        { provide: Title, useValue: { setTitle: () => {} } }
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.filters = <SearchFilters>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
