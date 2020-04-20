import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SbdlCommonModule } from '../common/common.module';
import { SearchComponent } from './search.component';
import { LoginWarningComponent } from './login-warning/login-warning.component';
import { of, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { emptyFilters } from '../data/search/search-filters.model';
import { LoginWarningService } from './login-warning/login-warning.service';

const mockOnWarningClosed = new Observable<any>();
const mockLoginWarningService = <LoginWarningService> {
  onWarningClosed: mockOnWarningClosed
};

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, SbdlCommonModule, RouterTestingModule ],
      declarations: [ SearchComponent, LoginWarningComponent ],
      providers: [ 
        { provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} },
            data: of({ data: { results: { results: [], filters: emptyFilters } }  }),
            params: of({ params: { query: 'text' }})
          }
        },
        { provide: LoginWarningService, useValue: mockLoginWarningService }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
