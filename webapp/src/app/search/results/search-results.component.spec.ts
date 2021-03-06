import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {SearchModule} from '../search.module';
import {SearchResultsComponent} from './search-results.component';
import {emptyFilters} from '../../data/search/search-filters.model';
import {of} from 'rxjs/internal/observable/of';
import {OktaAuthService} from '@okta/okta-angular';
import {Observable} from 'rxjs';
import {UserService} from 'src/app/data/user/user.service';
import {ConfirmationDialogService} from 'src/app/common/confirmation-dialog/confirmation-dialog.service';
import {mockSearchResult, mockWindowObj} from '../../app.module.spec';
import {SearchService} from "../../data/search/search.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';

const mockAuthService = jasmine.createSpyObj('OktaAuthService', ['loginRedirect']);

const mockAuthenticated = new Observable<boolean>();
const mockUserService = <UserService>{
  authenticated: mockAuthenticated
}

const mockConfirmationDialogService = jasmine.createSpyObj('ConfirmationDialogService', ['close']);

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SearchModule, RouterTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {params: {}},
          data: of({data: {results: {results: [], filters: emptyFilters}}}),
          params: of({params: {query: 'text'}})
        }
      },
        {provide: OktaAuthService, useValue: mockAuthService},
        {provide: UserService, useValue: mockUserService},
        {provide: ConfirmationDialogService, useValue: mockConfirmationDialogService},
        {provide: SearchService, useValue: mockSearchResult},
        mockWindowObj
      ]
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
