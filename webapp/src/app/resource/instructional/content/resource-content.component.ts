import { Component, EventEmitter, Input, OnInit, Output, HostBinding, HostListener } from '@angular/core';
import { coalesce } from 'src/app/common/utils';
import { FavoriteService } from 'src/app/data/favorite/favorite.service';
import { FavoriteResource } from 'src/app/data/favorite/model/favorite-resource.model';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from '../../outline/scrollable-elements.model';
import { DomSanitizer } from '@angular/platform-browser';

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
  togglingFavorite = false;
  readingMode = false;


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

  constructor(private favoriteService: FavoriteService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.onResize();
  }

  setGetStarted($event) {
    this.scrollableElements = coalesce(this.scrollableElements, <ScrollableElements>{});
    this.scrollableElements.getStarted = $event;

    if(this.scrollableElements.getStarted) {
      // TODO: once all elements have been populated then emit the event.
      this.loadScrollableElements.emit(this.scrollableElements);
    }
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
}
