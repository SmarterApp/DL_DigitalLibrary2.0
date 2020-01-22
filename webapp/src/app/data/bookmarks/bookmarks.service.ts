import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Map } from 'immutable';
import { DataService } from '../data.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { ResourceSummary } from '../resource/model/summary.model';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  private userBkmks$: ReplaySubject<Bookmark[]> = new ReplaySubject(1);
  private userBkmksForResId$: ReplaySubject<Map<number, Bookmark>> = new ReplaySubject(1);

  private userBkmks: Bookmark[];
  private userBkmkMap: Map<number, Bookmark>;

  constructor(
    private dataService: DataService,
    private userService: UserService) {

    this.userService.user.subscribe(this.refreshBookmarks);
    this.userBkmks$.subscribe(bkmks => this.userBkmks = bkmks);
    this.userBkmksForResId$.subscribe(bkmkMap => this.userBkmkMap = bkmkMap);
    window['bkmkSvc'] = this;
  }

  listAllBookmarks(): Observable<Bookmark[]> {
    return this.dataService
      .get('/api/bookmarks')
      .pipe(map(resp => resp.bookmarks.map(this.bookmarkFromJson)));
  }

  createBookmark(resourceId: number): void {
    this.dataService
      .post(`/api/bookmark/resource/${resourceId}`, null)
      .pipe(map(this.bookmarkFromJson))
      .subscribe(this.addBookmark);
  }

  deleteBookmark(b: Bookmark): void {
    this.dataService
      .delete(`/api/bookmark/${b.id}`)
      .subscribe(() => this.removeBookmark(b));
  }

  get userBookmarks(): Observable<Bookmark[]> {
    return this.userBkmks$;
  }

  get userBookmarksByResourceId(): Observable<Map<number, Bookmark>> {
    return this.userBkmksForResId$;
  }

  private refreshBookmarks = (user: User) => {
    if (user) {
      this.listAllBookmarks().subscribe(bookmarks => {
        this.userBkmks$.next(bookmarks);
        this.userBkmksForResId$.next(
          Map(bookmarks.map(b => ([b.resourceId, b]))));
      });
    } else {
      this.userBkmks$.next([]);
      this.userBkmksForResId$.next(Map());
    }
  }

  private addBookmark = (b: Bookmark) => {
    this.userBkmks$.next(this.userBkmks.concat([b]));
    this.userBkmksForResId$.next(this.userBkmkMap.set(b.resourceId, b));
  }

  private removeBookmark = (b: Bookmark) => {
    this.userBkmks$.next(this.userBkmks.filter(a => a.id !== b.id));
    this.userBkmksForResId$.next(this.userBkmkMap.remove(b.resourceId));
  }

  private bookmarkFromJson = (json: any): Bookmark => {
    return {
      id: json.bookmarkId,
      resourceId: json.resourceId,
      title: json.title,
      lastUpdatedDate: new Date(json.date || json.createdAt)
    };
  }
}
