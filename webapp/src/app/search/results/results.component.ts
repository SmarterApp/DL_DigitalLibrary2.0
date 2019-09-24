import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceResult } from 'src/app/data/search/resource-result.model';
import { MDCRipple } from '@material/ripple';
import { SearchFilters } from 'src/app/data/search/search-filters.model';

@Component({
  selector: 'sbdl-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute) { }

  searchText: string;
  results: ResourceResult[];

  filters: any = {};

  @ViewChildren('searchResult')
  searchResultsRef: ElementRef[];

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.results = data.results.results;
      this.filters = data.results.filters;
      this.setSelectedResourceTypes(this.route.snapshot.params);
    });

    this.route.params.subscribe(params => {
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

  private setSelectedResourceTypes(params: any) {
    if(params.resourceTypes) {
      const resourceTypeCodes = params.resourceTypes.split(',');
      this.filters.resourceTypes.forEach(x => x.selected = resourceTypeCodes.indexOf(x.code) !== -1);
    }
  }
}
