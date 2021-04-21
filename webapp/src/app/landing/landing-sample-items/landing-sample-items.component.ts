import { Component, Input, OnInit } from '@angular/core';
import { LandingPage } from '../../data/landing/model/landingPage.model';

@Component({
  selector: 'sbdl-landing-sample-items',
  templateUrl: './landing-sample-items.component.html',
  styleUrls: ['../landing-common.component.scss']
})
export class LandingSampleItemsComponent implements OnInit {

  @Input()
  landingPage: LandingPage;
  
  constructor() { }

  ngOnInit() {
  }

}
