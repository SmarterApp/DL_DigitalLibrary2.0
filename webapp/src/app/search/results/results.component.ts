import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sbdl-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  searchText: string;

  ngOnInit() {
    this.searchText = this.route.snapshot.params.q;
  }

}
