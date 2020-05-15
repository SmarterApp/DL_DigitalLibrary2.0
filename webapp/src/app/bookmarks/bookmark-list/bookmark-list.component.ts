import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Map} from 'immutable';
import groupBy from 'lodash.groupby';
import {ResourceSummary} from 'src/app/data/resource/model/summary.model';
import {ResourceType} from 'src/app/data/resource/model/resource-type.enum';
import {ResourceTypePipe} from 'src/app/pipes/resource-type.pipe';
import {byString, Comparator, on} from 'src/app/common/sorting/sorting';

const byTitle: Comparator<ResourceSummary> = on(x => x.properties.title, byString());

@Component({
  selector: 'sbdl-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  bookmarks: ResourceSummary[] = [];
  bookmarksByType = Map<ResourceType, ResourceSummary[]>();

  idsOfResourcesWithNotesSet: Set<number>;

  resourceTypesInOrder = [
    ResourceType.ConnectionsPlaylist,
    ResourceType.Instructional,
    ResourceType.FormativeStrategy,
    ResourceType.AccessibilityStrategy,
    ResourceType.ProfessionalLearning
  ];

  private resourceTypePipe = new ResourceTypePipe();

  constructor(
    private route: ActivatedRoute,
    private el: ElementRef,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.bookmarks) {
        this.bookmarks = data.bookmarks;
        this.bookmarksByType = Map(groupBy(data.bookmarks, 'type'));
        this.bookmarksByType = this.bookmarksByType.map(bookmarks => bookmarks.sort(byTitle));
      }
      if (data.idsOfResourcesWithNotes) {
        this.idsOfResourcesWithNotesSet = new Set(data.idsOfResourcesWithNotes);
      }
    });

    this.titleService.setTitle('My Bookmarks - Tools for Teachers');
  }

  bookmarkHasNotes(b: ResourceSummary) {
    return this.idsOfResourcesWithNotesSet.has(b.id);
  }

  scrollToType(t: ResourceType) {
    const targetEl = this.el.nativeElement.querySelector(
      `.resources-for-type.${this.resourceTypePipe.transform(t, {slug: true})}`);

    if (targetEl) {
      targetEl.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }
}
