import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sbdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filters: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const searchResults = this.route.snapshot.data;

    if(searchResults) {
      this.filters = this.route.snapshot.data.results.filters;
    }
  }

  throwError(){
    throw Error('boink.');
  }

}
