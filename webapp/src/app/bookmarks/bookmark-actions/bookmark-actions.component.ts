import { Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { PopoverService } from 'src/app/common/controls/popover/popover.service';
import { ResourceType } from '../../data/resource/model/resource-type.enum';
import { ResourceSummary } from '../../data/resource/model/summary.model';

@Component({
  selector: 'sbdl-bookmark-actions',
  templateUrl: './bookmark-actions.component.html',
  styleUrls: ['./bookmark-actions.component.scss']
})
export class BookmarkActionsComponent {

  @Input()
  resourceSummary: ResourceSummary;

  @ViewChild('shareButton', { static: false, read: ViewContainerRef })
  shareContainer: ViewContainerRef;

  @ViewChild('sharePopover', { static: false })
  sharePopover: ElementRef;

  togglingBookmarked = false;

  constructor(private popoverService: PopoverService) {}

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
    this.resourceSummary.properties.isBookmarked = !this.resourceSummary.properties.isBookmarked;
    this.togglingBookmarked = false;
  }

  share() {
    this.popoverService.open(this.shareContainer, this.sharePopover);
  }

}
