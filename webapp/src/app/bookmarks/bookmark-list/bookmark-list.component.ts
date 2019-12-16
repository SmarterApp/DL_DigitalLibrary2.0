import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ResourceBookmark } from '../../data/bookmarks/model/bookmark.model';

@Component({
  selector: 'sbdl-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  bookmarks: ResourceBookmark[] = [];

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.bookmarks) { this.bookmarks = data.bookmarks; }
    });

    this.titleService.setTitle('My Bookmarks - Tools for Teachers');
  }
}
