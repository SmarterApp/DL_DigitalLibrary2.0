import { Component, OnInit, Input, ViewChildren, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MDCChipSet } from '@material/chips';
import { Filter } from 'src/app/data/search/search-filters.model';

/**
 * Component to render filters which can be toggled on and off.
 */
@Component({
  selector: 'sbdl-filter-chipset',
  templateUrl: './filter-chipset.component.html',
  styleUrls: ['./filter-chipset.component.scss']
})
export class FilterChipsetComponent implements OnInit, AfterViewInit {

  /**
   * Filter Options
   */
  @Input()
  filters: Filter[];

  /**
   * Emits a string of filter codes when a filter has been changed.
   */
  @Output()
  onChanged = new EventEmitter<string[]>();

  @ViewChildren('filterChip')
  filterChipRefs: ElementRef[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.filterChipRefs) {
      for (const chip of this.filterChipRefs) {
        const chipSet = new MDCChipSet(chip.nativeElement);
      }
    }
  }

  toggleFilter(filter: Filter) {
    filter.selected = !filter.selected;
    this.onChanged.emit(this.filters.filter(x => x.selected).map(x => x.code));
  }
}
