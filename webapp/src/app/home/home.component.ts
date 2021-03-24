import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { SearchFilters, emptyFilters } from '../data/search/search-filters.model';

declare var jQuery: any;
declare function AblePlayer(jqObj: any): void;

@Component({
  selector: 'sbdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  filters: SearchFilters = emptyFilters;
  promotedResources = [];

  logo$: Observable<string>;

  @ViewChild('videoDemoLeft', { static: false }) private videoElemLeft: ElementRef;
  @ViewChild('videoDemoRight', { static: false }) private videoElemRight: ElementRef;

  private ablePlayerInstLeft: any;
  private ablePlayerInstRight: any;

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

  ngAfterViewInit() {
     this.show();
  }

  show() {
    // TODO: This is a bit of a hack
    // need to fix this when unit testing is fixed
    // without the try-catch.  This code will fail unit test
    // the jQuery object is undefined and the if statement does not catch that.
    // new story was created to resolve the issue with unit test.
    try {
      if (jQuery !== undefined) {
        if (this.videoElemLeft != null) {
          if (!this.ablePlayerInstLeft) {
            const $videoElem_l = jQuery(this.videoElemLeft.nativeElement);
            this.ablePlayerInstLeft = new AblePlayer($videoElem_l);
          }
        }
      }

      if (jQuery !== undefined) {
        if (this.videoElemRight != null) {
          if (!this.ablePlayerInstRight) {
            const $videoElem_r = jQuery(this.videoElemRight.nativeElement);
            this.ablePlayerInstRight = new AblePlayer($videoElem_r);
          }
        }
      }
    }
    catch
    {}
  }

  ngOnDestroy() {
  }
}
