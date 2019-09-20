import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sbdl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  model: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(event){
    this.router.navigate(['results', event === undefined ? {} : { q: event }]); 
  }
}
