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
  filters: SearchFilters = {} as SearchFilters;

  @ViewChildren('filterChip')
  filterChipRefs: ElementRef[];

  @Input()
  showAdvanced = false;

  @Input()
  showingResults = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  get anySubjectSelected() {
    return this.params && coalesce(this.params.subjects, []).length > 0;
  }

  get anyGradeSelected() {
    return this.params && coalesce(this.params.grades, []).length > 0;
  }

  get anyClaimSelected() {
    return this.params && coalesce(this.params.claims, []).length > 0;
  }

  get params() {
    return this.route.snapshot.params;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.filterChipRefs) {
      for (const chip of this.filterChipRefs) {
        const chipSet = new MDCChipSet(chip.nativeElement);
      }
    }
  }

  submit(event) {
    this.router.navigate(['search', event === undefined ? this.route.snapshot.params : {...this.route.snapshot.params, q: event }]);
  }

  setResourceTypes(resourceTypeCodes: string[]) {
    this.router.navigate(['search', { ...this.params, resourceTypes: resourceTypeCodes.join(',') }]);
  }

  setGrades(gradeCodes: string[]) {
    this.router.navigate(['search', { ...this.params, grades: gradeCodes.join(',') }]);
  }

  setSubjects(subjectCodes: string[]) {
    this.router.navigate(['search', { ...this.params, subjects: subjectCodes.join(',') }]);
  }

  setClaims(claimCodes: string[]) {
    this.router.navigate(['search', { ...this.params, claims: claimCodes.join(',') }]);
  }

  setTargets(targetCodes: string[]) {
    this.router.navigate(['search', { ...this.params, targets: targetCodes.join(',') }]);
  }

  setStandards(targetStandardCodes: string[]) {
    this.router.navigate(['search', { ...this.params, standards: targetStandardCodes.join(',') }]);
  }
}
