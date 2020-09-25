import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {ResourceSummary} from 'src/app/data/resource/model/summary.model';
import {emptyFilters, Filter, SearchFilters} from '../../data/search/search-filters.model';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'sbdl-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {


  @ViewChild('results', {static: false})
  resultsElem: ElementRef;

  allResults: ResourceSummary[];
  renderedResults: ResourceSummary[];
  filters: SearchFilters = emptyFilters;

  showAdvancedFiltersInitially: boolean;

  private readonly _destroyed$: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.pipe(
      takeUntil(this._destroyed$)
    ).subscribe(data => {
      if (data.results) {
        this.allResults = data.results.results || [];
        this.renderedResults = [];
        this.filters = data.results.filters;

        const params = this.route.snapshot.params;
        this.filters = {...this.filters, query: params.query };
        this.setSelectedFilters(params);

        requestAnimationFrame(() =>
          this.addInAnimationFrames(this.renderedResults, this.allResults));
      }
    });

    this.route.params.pipe(
      takeUntil(this._destroyed$)
    ).subscribe(params => {
      this.filters = {...this.filters, query: params.query };
      this.setSelectedFilters(params);
    });

    const initParams = this.route.snapshot.params;
    this.showAdvancedFiltersInitially = Object.keys(initParams).filter(x => x !== 'query').length > 0;
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  addInAnimationFrames = <T>(target: Array<T>, source: Array<T>) => {
    if (target.length < source.length) {
      target.push(source[target.length]);
      requestAnimationFrame(() => this.addInAnimationFrames(target, source));
    }
  }

  scrollToResults() {
    this.resultsElem.nativeElement.scrollIntoView(
      { behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  private setSelectedFilters(params: any) {
    this.setSelectedParams(params.resourceTypes, this.filters.resourceTypes);
    this.setSelectedParams(params.grades, this.filters.grades);
    this.setSelectedParams(params.subjects, this.filters.subjects);
    this.setSelectedParams(params.claims, this.filters.claims);
    this.setSelectedParams(params.targets, this.filters.targets);
    this.setSelectedParams(params.standards, this.filters.standards);
  }

  private setSelectedParams(params: string, filters: Filter[]) {
    if (params) {
      const paramCodes = params.split(',');
      filters.forEach(x => x.selected = paramCodes.indexOf(x.code) !== -1);
    }
  }
}
