import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchFilters } from '../data/search/search-filters.model';

@Component({
  selector: 'sbdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filters: SearchFilters = <SearchFilters>{};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.filters = this.route.snapshot.data.filters;
  }
}
