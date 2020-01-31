import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ResourceSummary } from '../../data/resource/model/summary.model';

@Component({
  selector: 'sbdl-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  bookmarks: ResourceSummary[] = [];
  idsOfResourcesWithNotesSet: Set<number>;

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.bookmarks) { this.bookmarks = data.bookmarks; }
      if (data.idsOfResourcesWithNotes) {
        this.idsOfResourcesWithNotesSet = new Set(data.idsOfResourcesWithNotes);
      }
    });

    this.titleService.setTitle('My Bookmarks - Tools for Teachers');
  }

  bookmarkHasNotes(b: ResourceSummary) {
    return this.idsOfResourcesWithNotesSet.has(b.id);
  }
}
