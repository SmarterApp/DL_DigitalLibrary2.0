import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy,
  OnInit, Output, ViewChildren } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MDCChipSet } from '@material/chips';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { SearchFilters, emptyFilters } from '../data/search/search-filters.model';
import { coalesce, whitelistKeys } from '../common/utils';

// Only used by this class. Should move to search-query-params.model.ts is we
// need to use elsewhere
export interface SearchQueryParams {
  query?: string;
  claims?: string;
  grades?: string;
  subjects?: string;
  targets?: string;
  standards?: string;
  resourceTypes?: string;
}

@Component({
  selector: 'sbdl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements  AfterViewInit, OnInit, OnDestroy {

  @Input()
  filters: SearchFilters = emptyFilters;

  @ViewChildren('filterChip')
  filterChipRefs: ElementRef[];

  @Input()
  showAdvanced = false;

  @Input()
  showingResults = false;

  @Input()
  numResults: number;

  @Output()
  goToResults = new EventEmitter<boolean>();

  params: SearchQueryParams;

  private routerSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.rectifyParams(this.parseParams(this.route.snapshot.params || {}));

    this.routerSubscription = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.params = this.rectifyParams(this.parseParams(this.route.snapshot.params || {}));
      });
  }

  ngAfterViewInit() {
    if (this.filterChipRefs) {
      for (const chip of this.filterChipRefs) {
        const chipSet = new MDCChipSet(chip.nativeElement);
      }
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  /**
   * Take an arbitraty object and filter down it's key discrading anything that
   * is not a valid SearchQueryParam property.
   */
  private parseParams(params: object): SearchQueryParams {
    return whitelistKeys(params as SearchQueryParams,
      [ 'query', 'claims', 'grades', 'subjects', 'targets', 'standards', 'resourceTypes' ]);
  }

  /**
   * Take a valid SearchQueryParams object and apply the search filter
   * selection logic to the properties. For example, Claims filtering is only
   * available when Grade and Subject are specified.
   */
  rectifyParams(params: SearchQueryParams): SearchQueryParams {
    const result = {...params};

    // Remove any unset parameter values
    for (const key in result) {
      if (!result[key] || result[key].length === 0) {
        delete result[key];
      }
    }

    if (!result.grades || !result.subjects) {
      delete result.claims;
    }

    // claims will only exist at this point if both grades and subjects do
    if (!result.claims) {
      delete result.targets;
      delete result.standards;
    }

    return result;
  }

  search(newParams: SearchQueryParams) {
    const params = this.rectifyParams({...this.params, ...newParams });

    this.router.navigate(['search', params]);
  }
}
