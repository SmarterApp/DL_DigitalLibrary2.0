import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input()
  model: ResourceModel;

  @Output()
  loadScrollableElements = new EventEmitter<ScrollableElements>();

  togglingFavorite = false;

  private scrollableElements: ScrollableElements;

  get details() {
    return this.model.details;
  }

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
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
    });
  }
}
