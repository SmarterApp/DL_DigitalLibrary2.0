import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SearchFilters, emptyFilters } from 'src/app/data/search/search-filters.model';
import { LandingComponent } from './landing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from 'src/app/pipes/pipes.module';
import {SearchModule} from '../search/search.module';
import { convertToParamMap} from '@angular/router';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, PipesModule, SearchModule ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: {
            snapshot: {
                paramMap: convertToParamMap({
                  resourceType: 'playlist',
                })
              }
            }
        }],
      declarations: [ LandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    //component.filters = emptyFilters;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
