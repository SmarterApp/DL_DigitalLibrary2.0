import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChildren,
  ViewChild
} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MDCChipSet} from '@material/chips';
import {Subscription, Observable, of as observableOf} from 'rxjs';
import {filter} from 'rxjs/internal/operators/filter';
import {emptyFilters, SearchFilters} from '../data/search/search-filters.model';
import {whitelistKeys} from '../common/utils';
import { UserService } from '../data/user/user.service';
import { PopoverService } from '../common/controls/popover/popover.service';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { PopoverComponent } from '../common/controls/popover/popover.component';
import { TextFieldComponent } from '../common/controls/text-field/text-field.component';
import { StorageService } from '../common/storage.service';

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
  numResults: number;

  @Input()
  showHeadings = true;

  @Output()
  goToResults = new EventEmitter<boolean>();

  params: SearchQueryParams;
  newSearch = true;
  
  popover: PopoverComponent;
  popoverCloseSubscription: Subscription;

  private routerSubscription: Subscription;

  private authSubscription: Subscription;
  private authenticated: boolean;

  @ViewChild(TextFieldComponent, { static: false })
  searchInputTextField: TextFieldComponent;

  @ViewChild('loginWarningPopover', { static: false })
  loginWarningPopover: ElementRef;

  shareOverlayOpen: boolean;
  readonly shareOverlayPositions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }
  ];

  private readingModeDefaultWidth = 1200;
  private resizeTimeout;
  private oldReadingMode: boolean;
  private wasSmall: boolean;



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private popoverService: PopoverService,
    private storageService: StorageService
  ) {
    // this.authenticated$ = this.userService.authenticated;
  }

  ngOnInit() {
    this.params = this.rectifyParams(this.parseParams(this.route.snapshot.params || {}));
    this.newSearch = (Object.keys(this.params).length === 0);

    this.routerSubscription = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.params = this.rectifyParams(this.parseParams(this.route.snapshot.params || {}));
        this.newSearch = (Object.keys(this.params).length === 0);
      });

    this.authSubscription = this.userService.authenticated
      .subscribe((auth) => this.authenticated = auth);
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

    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
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
    this.router.navigate([
      'search',
      this.rectifyParams({
        ...this.params,
        query: this.filters.query,
        ...newParams
      })
    ]);
  }

  close = () => {
    if (this.popoverCloseSubscription) {
      this.popoverCloseSubscription.unsubscribe();
    }

    this.popoverCloseSubscription = undefined;
    this.popover = undefined;
    requestAnimationFrame(() => this.searchInputTextField.textFieldRef.nativeElement.focus());
  }

  private offset(el) {
    const rect = el.getBoundingClientRect();
    const width = rect.right - rect.left;

    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft + width / 2 + 24 };
  }

  private openLoginWarningPopover() {
    this.popover = this.popoverService.openOnBody(this.loginWarningPopover, {
      offset: this.offset(this.searchInputTextField.textFieldRef.nativeElement),
      cssClass: 'tooltip',
      placement: 'bottom'
    });
    this.popover.onClose.subscribe(this.close);
    this.storageService.setSearchLoginWarningDisplayed('true');
  }

  onSearchClick() {
    if (!this.authenticated && this.storageService.getSearchLoginWarningDisplayed() === 'false') {
      this.openLoginWarningPopover();
    }
  }
}
