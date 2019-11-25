import { Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ResourceType } from '../../data/resource/model/resource-type.enum';
import { ResourceBookmark } from '../../data/bookmarks/model/bookmark.model';
import { PopoverService } from 'src/app/common/controls/popover/popover.service';

@Component({
  selector: '[sbdl-bookmark-card]',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.scss']
})
export class BookmarkCardComponent {

  @Input()
  bookmark: ResourceBookmark;

  @ViewChild('shareButton', { static: false, read: ViewContainerRef })
  shareContainer: ViewContainerRef;

  @ViewChild('sharePopover', { static: false })
  sharePopover: ElementRef;

  togglingBookmarked = false;

  constructor(private popoverService: PopoverService) { }

  get details(): string[] {
    if (!this.bookmark) { return; }

    const result: string[] = [];

    if (this.bookmark.properties.grades.length === 1)  {
      result.push('Grade ' + this.bookmark.properties.grades[0].shortName);
    } else if (this.bookmark.properties.grades.length > 1) {
      result.push('Grades ' + this.bookmark.properties.grades.map(g => g.shortName).join(', '));
    }

    if (this.bookmark.properties.subject && this.bookmark.properties.subject.code) {
      result.push(this.bookmark.properties.subject.shortName);
    }

    if (this.bookmark.properties.claims.length === 1) {
      result.push('Claim ' + this.bookmark.properties.claims[0].number);
    } else if (this.bookmark.properties.claims.length > 1) {
      result.push('Claims ' + this.bookmark.properties.claims.map(c => c.number).join(', '));
    }

    if (this.bookmark.properties.targets.length === 1) {
      result.push('Target ' + this.bookmark.properties.targets[0].number);
    } else if (this.bookmark.properties.targets.length > 1) {
      result.push('Targets ' + this.bookmark.properties.targets.map(t => t.number).join(', '));
    }

    return result;
  }

  isProfessionalLearning(): boolean {
    return this.bookmark.type === ResourceType.ProfessionalLearning;
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
    this.bookmark.properties.isBookmarked = !this.bookmark.properties.isBookmarked;
    this.togglingBookmarked = false;
  }

  share() {
    this.popoverService.open(this.shareContainer, this.sharePopover);
  }

}

