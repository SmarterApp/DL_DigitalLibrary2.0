import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MDCRipple } from '@material/ripple';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { FilterChip } from 'src/app/common/controls/filter-chipset/filter-chipset.component';
import { ResourceSummary } from 'src/app/data/resource/model/summary.model';

@Component({
  selector: 'sbdl-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private router: Router, private route: ActivatedRoute) { }

  allResults: ResourceSummary[];
  renderedResults: ResourceSummary[];
  filters: any = {};

  @ViewChildren('searchResult')
  searchResultsRef: ElementRef[];

  showAdvancedFiltersInitially: boolean;

  private dataSubscription: Subscription;
  private paramsSubscription: Subscription;
  private routerSubscription: Subscription;
  private loading = true;

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(() => { this.loading = true; });

    this.dataSubscription = this.route.data.subscribe(data => {
      if (data.results) {
        this.allResults = data.results.results;
        this.renderedResults = [];
        this.filters = data.results.filters;

        const params = this.route.snapshot.params;
        this.filters = {... this.filters, freeText: params.q };
        this.setSelectedFilters(params);

        requestAnimationFrame(this.chunkedRender);
      }
    });

    this.paramsSubscription = this.route.params.subscribe(params => {
      this.filters = {... this.filters, freeText: params.q };
      this.setSelectedFilters(params);
    });

    const initParams = this.route.snapshot.params;
    this.showAdvancedFiltersInitially = Object.keys(initParams).filter(x => x !== 'q').length > 0;
  }

  ngAfterViewInit() {
    if (this.searchResultsRef) {
      for (const result of this.searchResultsRef) {
        MDCRipple.attachTo(result.nativeElement);
      }
    }
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  chunkedRender = () => {
    this.loading = false;
    if (this.renderedResults.length < this.allResults.length) {
      this.renderedResults.push(this.allResults[this.renderedResults.length]);
      requestAnimationFrame(this.chunkedRender);
    }
  }

  private setSelectedFilters(params: any) {
    this.setSelectedParams(params.resourceTypes, this.filters.resourceTypes);
    this.setSelectedParams(params.grades, this.filters.grades);
    this.setSelectedParams(params.subjects, this.filters.subjects);
    this.setSelectedParams(params.claims, this.filters.claims);
    this.setSelectedParams(params.targets, this.filters.targets);
    this.setSelectedParams(params.standards, this.filters.standards);
  }

  private setSelectedParams(params: string, filters: FilterChip[]) {
    if (params) {
      const paramCodes = params.split(',');
      filters.forEach(x => x.selected = paramCodes.indexOf(x.code) !== -1);
    }
  }
}
