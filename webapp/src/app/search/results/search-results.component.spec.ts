import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchModule } from '../search.module';
import { SearchResultsComponent } from './search-results.component';
import { of } from 'rxjs/internal/observable/of';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SearchModule, RouterTestingModule ],
      providers: [ {
        provide: ActivatedRoute,
        useValue: {
          snapshot: { params: {} },
          data: of({ data: { results: { results: [], filters: [] } }  }),
          params: of({ params: { q: 'text' }})
        }
      } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    component.allResults = [];
    component.renderedResults = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
