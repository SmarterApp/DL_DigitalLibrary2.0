import { Component, OnInit, Input, HostListener, ViewChild, ViewContainerRef, ElementRef, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/app/data/resource/model/resource.model';
import { getCssVar } from 'src/app/common/utils';
import { PopoverService } from 'src/app/common/controls/popover/popover.service';

@Component({
  selector: 'sbdl-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

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

  togglingBookmarked = false;
  hideReadingModeToggle = false;
  currentUrl: string;
  showCopied = false;

  private readingModeDefaultWidth = 1200;
  private resizeTimeout;
  private oldReadingMode: boolean;
  private wasSmall: boolean;

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

  constructor(private popoverService: PopoverService) { }

  ngOnInit() {
    this.onResize();
    this.currentUrl = location.href;
    this.readingModeDefaultWidth = getCssVar('--breakpoint-lg');
  }

  share() {
    this.popoverService.open(this.shareContainer, this.sharePopover);
  }


  copyToClipboard(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.showCopied = true;
    setTimeout(() => this.showCopied = false, 5000);
  }

  toggleBookmarked() {
    if (this.togglingBookmarked) { return; }

    // prevent multiple clicks
    this.togglingBookmarked = true;
    /* Something like
    this.favoriteService.postFavoriteResource(favoriteResource).subscribe(res => {
      this.model.details.favorite = res.favorite;
      this.togglingFavorite = false;
    }, error => {
      // TODO: Implement error notification system?
      this.togglingFavorite = false;
    });
    */
    // Until this API is real:
    this.resource.properties.isBookmarked = !this.resource.properties.isBookmarked;
    this.togglingBookmarked = false;
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
