import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sbdl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  model: string;

  constructor() { }

  ngOnInit() {
  }

  click(){
    console.log(this.model);
  }

}
