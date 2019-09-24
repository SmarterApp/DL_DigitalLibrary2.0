import { Component, OnInit, Input, ViewChildren, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MDCChipSet } from '@material/chips';

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
  filters: FilterChip[];

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
    if(this.filterChipRefs) {
      for(let chip of this.filterChipRefs) {
        const chipSet = new MDCChipSet(chip.nativeElement);
      }
    }
  }

  toggleFilter(filter: FilterChip) {
    filter.selected = !filter.selected;
    this.onChanged.emit(this.filters.filter(x => x.selected).map(x => x.code));
  }
}

export interface FilterChip {
  title: string;
  code: string;
  selected: boolean;
}