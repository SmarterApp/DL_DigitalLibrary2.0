import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MDCChipSet } from '@material/chips';
import { SearchFilters } from '../data/search/search-filters.model';

@Component({
  selector: 'sbdl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Input()
  filters: SearchFilters = <SearchFilters>{};

  @ViewChildren('filterChip')
  filterChipRefs: ElementRef[];

  // TODO: Initialize to false;
  showAdvanced: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.filterChipRefs) {
      for(let chip of this.filterChipRefs) {
        const chipSet = new MDCChipSet(chip.nativeElement);
      }
    }
  }

  submit(event){
    this.router.navigate(['results', event === undefined ? this.route.snapshot.params : {...this.route.snapshot.params, q: event }]); 
  }

  setResourceTypes(resourceTypeCodes: string[]) {
    this.router.navigate(['results', { ...this.route.snapshot.params, resourceTypes: resourceTypeCodes.join(',') }]);
  }
}
 