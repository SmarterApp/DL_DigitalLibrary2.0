import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SbdlCommonModule } from '../common/common.module';
import { SearchComponent } from './search.component';
import { LoginWarningComponent } from './login-warning/login-warning.component';
import { of, Observable } from 'rxjs';
import { UserService } from '../data/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { emptyFilters } from '../data/search/search-filters.model';
import { PopoverService } from '../common/controls/popover/popover.service';
import { StorageService } from '../common/storage.service';
import { LoginWarningStateServiceService } from './login-warning/login-warning-state-service.service';

const mockAuthenticated = new Observable<boolean>();
const mockUserService = <UserService> { 
  authenticated: mockAuthenticated
}

const mockPopoverService = jasmine.createSpyObj('PopoverService', ['openOnBody']);
const mockStorageService= jasmine.createSpyObj('StorageService', ['getSearchLoginWarningDisplayed', 'setSearchLoginWarningDisplayed']);
const mockLoginWarningStateService = jasmine.createSpyObj('LoginWarningStateService', ['onCloseClick']);


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, SbdlCommonModule, RouterTestingModule ],
      declarations: [ SearchComponent, LoginWarningComponent ],
      providers: [ 
        { provide: UserService, useValue: mockUserService },
        { provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} },
            data: of({ data: { results: { results: [], filters: emptyFilters } }  }),
            params: of({ params: { query: 'text' }})
          }
        },
        { provide: PopoverService, useValue: mockPopoverService },
        { provide: StorageService, useValue: mockStorageService },
        { provide: LoginWarningStateServiceService, useValue: mockLoginWarningStateService }
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
