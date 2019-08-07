import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { PopoverService } from 'src/app/common/controls/popover/popover.service';
import { coalesce } from 'src/app/common/utils';
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

  readonly ReadingModeDefaultWidth = 1200;

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
  currentUrl: string;
  showCopied = false;


  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if(window.innerWidth < this.ReadingModeDefaultWidth && !this.readingMode) {
      this.toggleReadingMode();
    } else if(window.innerWidth >= this.ReadingModeDefaultWidth && this.readingMode){
      this.toggleReadingMode();
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
        && this.scrollableElements.formativeAssessmentProcess) {
      this.loadScrollableElements.emit(this.scrollableElements);
    }
  }
}
