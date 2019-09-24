import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MDCRipple } from '@material/ripple';
import { Subscription } from 'rxjs';
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
        this.setSelectedResourceTypes(params);
      }
    });

    this.paramsSubscription = this.route.params.subscribe(params => {
      this.filters = {... this.filters, freeText: params.q };
      this.setSelectedResourceTypes(params);
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
