import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { PopoverService } from 'src/app/common/controls/popover/popover.service';
import { FavoriteService } from 'src/app/data/favorite/favorite.service';
import { FavoriteResource } from 'src/app/data/favorite/model/favorite-resource.model';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from '../../outline/scrollable-elements.model';

@Component({
  selector: 'sbdl-resource-content',
  templateUrl: './resource-content.component.html',
  styleUrls: ['./resource-content.component.scss']
})
export class ResourceContentComponent implements OnInit {

  @Input()
  model: ResourceModel;

  @Output()
  loadScrollableElements = new EventEmitter<ScrollableElements>();

  @Output()
  readingModeChanged = new EventEmitter<boolean>();

  @ViewChild('shareButton', { static: false, read: ViewContainerRef })
  shareContainer: ViewContainerRef;

  @ViewChild('sharePopover', { static: false })
  sharePopover: ElementRef;

  togglingFavorite = false;
  readingMode = false;
  hideReadingModeToggle = false;
  currentUrl: string;
  showCopied = false;

  private readingModeDefaultWidth = 1200;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if(window.innerWidth < this.readingModeDefaultWidth && !this.readingMode) {
      this.toggleReadingMode();
      this.hideReadingModeToggle = true;
    } else if(window.innerWidth >= this.readingModeDefaultWidth && this.readingMode){
      this.toggleReadingMode();
      this.hideReadingModeToggle = false;
    }
  }

  private scrollableElements: ScrollableElements;

  get details() {
    return this.model.details;
  }

  constructor(
    private popoverService: PopoverService,
    private favoriteService: FavoriteService) { }


  ngOnInit() {
    this.onResize();
    this.currentUrl = location.href;
    this.readingModeDefaultWidth = +getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg').replace('px', '');
  }

  setGetStarted($event) {
    this.scrollableElements = {...this.scrollableElements, getStarted: $event };
    this.emitScrollableElementsEvent();
  }

  setDifferentiation($event) {
    this.scrollableElements = {...this.scrollableElements, differentiation: $event };
    this.emitScrollableElementsEvent();
  }

  setFormative($event) {
    this.scrollableElements = {...this.scrollableElements, formativeAssessmentProcess: $event };
    this.emitScrollableElementsEvent();
  }

  setSteps($event) {
    this.scrollableElements = {...this.scrollableElements, steps: $event }; 
    this.emitScrollableElementsEvent();
  }

  setAttachments($event) {
    this.scrollableElements = {...this.scrollableElements, attachments: $event };
    this.emitScrollableElementsEvent();
  }

  share() {
    this.popoverService.open(this.shareContainer, this.sharePopover);
  }

  scrollToAttachments() {
    if(this.scrollableElements && this.scrollableElements.attachments) {
      this.scrollableElements.attachments.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }

  copyToClipboard(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.showCopied = true;
    setTimeout(() => this.showCopied = false, 5000);
  }

  toggleFavorite() {
    if(this.togglingFavorite)
      return;

    // prevent multiple clicks
    this.togglingFavorite = true;
    const favoriteResource: FavoriteResource = {
      resourceId: this.model.resourceId,
      favorite: !this.model.details.favorite
    };

    this.favoriteService.postFavoriteResource(favoriteResource).subscribe(res => {
      this.model.details.favorite = res.favorite;
      this.togglingFavorite = false;
    }, error => {
      // TODO: Implement error notification system?
      this.togglingFavorite = false;
    });
  }

  toggleReadingMode() {
    this.readingMode = !this.readingMode;
    this.readingModeChanged.emit(this.readingMode);
  }

  private emitScrollableElementsEvent() {
    if(this.scrollableElements.getStarted 
        && this.scrollableElements.differentiation 
        && this.scrollableElements.steps
        && this.scrollableElements.attachments
        && this.scrollableElements.formativeAssessmentProcess) {
      this.loadScrollableElements.emit(this.scrollableElements);
    }
  }
}
