import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SearchFilters, emptyFilters } from '../data/search/search-filters.model';

@Component({
  selector: 'sbdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filters: SearchFilters = emptyFilters;
  promotedResources = [];

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.filters = this.route.snapshot.data.filters;
    this.promotedResources = this.route.snapshot.data.promotedResources;
    this.titleService.setTitle('Tools for Teachers - Smarter Balanced');
  }
}
