import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceResult } from 'src/app/data/search/resource-result.model';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'sbdl-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute) { }

  searchText: string;
  results: ResourceResult[];

  @ViewChildren('searchResult')
  searchResultsRef: ElementRef[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchText = params.q;
    });

    this.route.data.subscribe(data => {
      this.results = data.results;
      console.log(this.results);
    });
  }

  ngAfterViewInit() {
    if(this.searchResultsRef) {
      for(let result of this.searchResultsRef) {
        MDCRipple.attachTo(result.nativeElement);
      }
    }
  }
}
