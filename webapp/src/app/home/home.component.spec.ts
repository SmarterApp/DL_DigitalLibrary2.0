import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
import { LoggingService } from 'src/app/common/logging/logging.service';
import { SearchFilters, emptyFilters } from 'src/app/data/search/search-filters.model';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SearchModule } from '../search/search.module';
import { ResourceModule } from '../resource/resource.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, ResourceModule, PipesModule, SearchModule ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ActivatedRoute, useValue: { snapshot: { data: { filters: emptyFilters } } } },
        { provide: Title, useValue: { setTitle: () => {} } },
        LoggingService
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.filters = emptyFilters;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
