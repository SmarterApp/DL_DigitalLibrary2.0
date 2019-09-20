import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceResult } from 'src/app/data/search/resource-result.model';

@Component({
  selector: 'sbdl-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  searchText: string;
  results: ResourceResult[];

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.results = data.results;
      console.log(this.results);
    });
  }
}
