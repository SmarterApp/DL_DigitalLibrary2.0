import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchModule } from '../search.module';
import { ResultsComponent } from './results.component';
import { of } from 'rxjs/internal/observable/of';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SearchModule, RouterTestingModule ],
      providers: [ { provide: ActivatedRoute, useValue: { data: of({ data: { results: [] }  }), params: of({ params: { q: 'text' }}) } }, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    component.results = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
