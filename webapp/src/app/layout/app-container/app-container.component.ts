import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Location } from '@angular/common';
import { urlPathPart } from 'src/app/common/utils';
import { OKTA_CALLBACK_PATH } from 'src/app/common/constants';

@Component({
  selector: 'sbdl-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  routeLoading = false;

  get locationPath() { return this.location.path(); }

  private oldPath = '/';
  private loading$ = new Subject<boolean>();

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        this.loading$.next(true);
      } else if (evt instanceof NavigationEnd) {
        this.loading$.next(false);
        const newPath = urlPathPart(evt.url);
        if (newPath !== this.oldPath) {
          window.scrollTo(0, 0);
        }
        this.oldPath = newPath;
      }
    });

    this.route.fragment.subscribe((fragment) => {
      if (fragment && !this.router.url.includes(OKTA_CALLBACK_PATH)) {
        setTimeout(() => {
          const el = document.querySelector('#' + fragment);
          if (el) { el.scrollIntoView({behavior: 'smooth'}); }
        });
      }
    });

    this.loading$
      .pipe(debounceTime(250))
      .subscribe(loading => this.routeLoading = loading);
  }

}
