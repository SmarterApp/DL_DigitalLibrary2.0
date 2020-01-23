import { ResourceSummary } from '../data/resource/model/summary.model';
import { ResourceType } from '../data/resource/model/resource-type.enum';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { BookmarksService } from '../data/bookmarks/bookmarks.service';
import { ResourceService } from '../data/resource/resource.service';

@Injectable({
    providedIn: 'root'
})
export class BookmarksResolve implements Resolve<ResourceSummary[]> {
    constructor(
      private bookmarksService: BookmarksService,
      private resourceService: ResourceService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ResourceSummary[]> {

    return this.bookmarksService
      .userBookmarks
      .pipe(
        take(1),
        this.resourceService.getResourceSummariesForBookmarks
      );
  }
}
