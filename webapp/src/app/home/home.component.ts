import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { SearchFilters, emptyFilters } from '../data/search/search-filters.model';

@Component({
  selector: 'sbdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filters: SearchFilters = emptyFilters;
  promotedResources = [];

  logo$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private tenantThemeService: TenantThemeService,
    private titleService: Title,
  ) {
    this.logo$ = tenantThemeService.currentTenantTheme$.pipe(
      map(theme => theme.logoUris.full));
  }

  ngOnInit() {
    this.promotedResources = this.route.snapshot.data.promotedResources;
    this.titleService.setTitle('Tools for Teachers - Smarter Balanced');
  }
}
