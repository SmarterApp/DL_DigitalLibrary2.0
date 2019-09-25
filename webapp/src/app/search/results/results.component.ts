import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MDCRipple } from '@material/ripple';
import { Subscription } from 'rxjs';
import { FilterChip } from 'src/app/common/controls/filter-chipset/filter-chipset.component';
import { ResourceResult } from 'src/app/data/search/resource-result.model';

@Component({
  selector: 'sbdl-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private route: ActivatedRoute) { }

  results: ResourceResult[];
  filters: any = {};

  @ViewChildren('searchResult')
  searchResultsRef: ElementRef[];

  private dataSubscription: Subscription;
  private paramsSubscription: Subscription;

  ngOnInit() {
    this.dataSubscription = this.route.data.subscribe(data => {
      if(data.results) {
        this.results = data.results.results;
        this.filters = data.results.filters;

        const params = this.route.snapshot.params;
        this.filters = {... this.filters, freeText: params.q };
        this.setSelectedFilters(params);
      }
    });

    this.paramsSubscription = this.route.params.subscribe(params => {
      this.filters = {... this.filters, freeText: params.q };
      this.setSelectedFilters(params);
    });
  }

  ngAfterViewInit() {
    if(this.searchResultsRef) {
      for(let result of this.searchResultsRef) {
        MDCRipple.attachTo(result.nativeElement);
      }
    }
  }

  ngOnDestroy() {
    if(this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }

    if(this.dataSubscription) {
      this.dataSubscription.unsubscribe();
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
    if(params) {
      const paramCodes = params.split(',');
      filters.forEach(x => x.selected = paramCodes.indexOf(x.code) !== -1);
    }
  }
}
