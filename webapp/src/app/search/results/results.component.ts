import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceResult } from 'src/app/data/search/resource-result.model';
import { MDCRipple } from '@material/ripple';
import { SearchFilters } from 'src/app/data/search/search-filters.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sbdl-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private route: ActivatedRoute) { }

  searchText: string;
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
        this.setSelectedResourceTypes(this.route.snapshot.params);
      }
    });

    this.paramsSubscription = this.route.params.subscribe(params => {
      this.filters.freeText = params.q;
      this.setSelectedResourceTypes(params);
      this.searchText = params.q;
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

  private setSelectedResourceTypes(params: any) {
    if(params.resourceTypes) {
      const resourceTypeCodes = params.resourceTypes.split(',');
      this.filters.resourceTypes.forEach(x => x.selected = resourceTypeCodes.indexOf(x.code) !== -1);
    }
  }
}
