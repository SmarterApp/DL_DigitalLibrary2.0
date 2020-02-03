import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopoverService } from 'src/app/common/controls/popover/popover.service';
import { ResourceType } from '../../data/resource/model/resource-type.enum';
import { ResourceSummary } from '../../data/resource/model/summary.model';
import { Bookmark } from 'src/app/data/bookmarks/bookmark.model';
import { BookmarksService } from 'src/app/data/bookmarks/bookmarks.service';

@Component({
  selector: 'sbdl-bookmark-actions',
  templateUrl: './bookmark-actions.component.html',
  styleUrls: ['./bookmark-actions.component.scss']
})
export class BookmarkActionsComponent implements OnInit, OnDestroy {

  @Input()
  resourceSummary: ResourceSummary;

  @Input()
  hasNotes: boolean;

  @ViewChild('shareButton', { static: false, read: ViewContainerRef })
  shareContainer: ViewContainerRef;

  @ViewChild('sharePopover', { static: false })
  sharePopover: ElementRef;

  updatingBookmarked = false;
  bookmark: Bookmark;

  private bookmarksSubscription: Subscription;

  constructor(
    private bookmarksService: BookmarksService,
    private popoverService: PopoverService) {}

  ngOnInit() {
    this.bookmarksSubscription = this.bookmarksService.userBookmarksByResourceId.subscribe(bkmkMap => {
      this.bookmark = bkmkMap.get(this.resourceSummary.id);
      this.updatingBookmarked = false;
    });
  }

  ngOnDestroy() {
    if (this.bookmarksSubscription) {
      this.bookmarksSubscription.unsubscribe();
      this.bookmarksSubscription = undefined;
    }
  }

  toggleBookmarked = () => {
    // prevent multiple clicks
    if (this.updatingBookmarked) { return; }
    this.updatingBookmarked = true;

    if (this.bookmark) {
      this.bookmarksService.deleteBookmark(this.bookmark);
    } else {
      this.bookmarksService.createBookmark(this.resourceSummary.id);
    }
  }

  share() {
    this.popoverService.open(this.shareContainer, this.sharePopover);
  }

}
