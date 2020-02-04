import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Resource} from 'src/app/data/resource/model/resource.model';
import {getCssVar} from 'src/app/common/utils';
import {Bookmark} from 'src/app/data/bookmarks/bookmark.model';
import {BookmarksService} from 'src/app/data/bookmarks/bookmarks.service';
import {PopoverService} from 'src/app/common/controls/popover/popover.service';
import {UserService} from 'src/app/data/user/user.service';
import {ConnectedPosition} from '@angular/cdk/overlay';

@Component({
  selector: 'sbdl-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnDestroy, OnInit {

  @Input()
  resource: Resource;

  @Input()
  hasNotes: boolean;

  @Input()
  notesVisible: boolean;

  @Input()
  printingMode: boolean;

  @Input()
  readingMode: boolean;

  @Output()
  notesVisibilityChanged = new EventEmitter<boolean>();

  @Output()
  printingModeChanged = new EventEmitter<boolean>();

  @Output()
  readingModeChanged = new EventEmitter<boolean>();

  @ViewChild('shareButton', { static: false, read: ViewContainerRef })
  shareContainer: ViewContainerRef;

  @ViewChild('sharePopover', { static: false })
  sharePopover: ElementRef;

  updatingBookmarked = true;
  hideReadingModeToggle = false;
  bookmark: Bookmark;
  readonly authenticated$: Observable<boolean>;
  shareValue: string;
  shareOverlayOpen: boolean;
  readonly shareOverlayPositions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }
  ];

  private readingModeDefaultWidth = 1200;
  private resizeTimeout;
  private oldReadingMode: boolean;
  private wasSmall: boolean;
  private bookmarksSubscription: Subscription;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(this.doResize, 200);
  }

  doResize = () =>  {
    const isSmall = window.innerWidth < this.readingModeDefaultWidth;

    // Transition from large to small, set readingMode = true
    if (isSmall && (!this.wasSmall || this.wasSmall === undefined)) {
      this.hideReadingModeToggle = true;
      this.oldReadingMode = this.readingMode;
      this.readingModeChanged.emit(true);

    // Transition from small to large, restore the previous mode.
    } else if (!isSmall && (this.wasSmall || this.wasSmall === undefined)) {
      this.hideReadingModeToggle = false;
      this.readingModeChanged.emit(this.oldReadingMode);
    }

    this.wasSmall = isSmall;
  }

  constructor(
    private bookmarksService: BookmarksService,
    private popoverService: PopoverService,
    private userService: UserService
  ) {
    this.authenticated$ = this.userService.authenticated;
  }

  ngOnInit() {
    this.onResize();
    this.shareValue = location.href.replace(/(\?.*)/, '');
    this.readingModeDefaultWidth = getCssVar('--breakpoint-lg');
    this.bookmarksSubscription = this.bookmarksService.userBookmarksByResourceId.subscribe(bkmkMap => {
      this.bookmark = bkmkMap.get(this.resource.id);
      this.updatingBookmarked = false;
    });
  }

  ngOnDestroy() {
    if (this.bookmarksSubscription) {
      this.bookmarksSubscription.unsubscribe();
      this.bookmarksSubscription = undefined;
    }
  }

  share() {
    this.popoverService.open(this.shareContainer, this.sharePopover);
  }

  toggleBookmarked = () => {
    // prevent multiple clicks
    if (this.updatingBookmarked) { return; }
    this.updatingBookmarked = true;

    if (this.bookmark) {
      this.bookmarksService.deleteBookmark(this.bookmark);
    } else {
      this.bookmarksService.createBookmark(this.resource.id);
    }
  }

  toggleReadingMode() {
    this.readingModeChanged.emit(!this.readingMode);
  }

  toggleNotes() {
    this.notesVisibilityChanged.emit(!this.notesVisible);
  }

  togglePrintingMode() {
    this.printingModeChanged.emit(!this.printingMode);
  }

}
