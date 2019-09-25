import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MDCChipSet } from '@material/chips';
import { SearchFilters } from '../data/search/search-filters.model';
import { coalesce } from '../common/utils';

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

  @Input()
  showAdvanced: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  get anySubjectSelected() {
    return this.params && coalesce(this.params.subjects, []).length > 0
  }

  get anyGradeSelected() {
    return this.params && coalesce(this.params.grades, []).length > 0
  }

  get anyClaimSelected() {
    return this.params && coalesce(this.params.claims, []).length > 0
  }

  get params() {
    return this.route.snapshot.params;
  }

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
    this.router.navigate(['results', { ...this.params, resourceTypes: resourceTypeCodes.join(',') }]);
  }

  setGrades(gradeCodes: string[]) {
    this.router.navigate(['results', { ...this.params, grades: gradeCodes.join(',') }]);
  }

  setSubjects(subjectCodes: string[]) {
    this.router.navigate(['results', { ...this.params, subjects: subjectCodes.join(',') }]);
  }

  setClaims(claimCodes: string[]) {
    this.router.navigate(['results', { ...this.params, claims: claimCodes.join(',') }]);
  }

  setTargets(targetCodes: string[]) {
    this.router.navigate(['results', { ...this.params, targets: targetCodes.join(',') }]);
  }

  setStandards(targetStandardCodes: string[]) {
    this.router.navigate(['results', { ...this.params, standards: targetStandardCodes.join(',') }]);
  }
}