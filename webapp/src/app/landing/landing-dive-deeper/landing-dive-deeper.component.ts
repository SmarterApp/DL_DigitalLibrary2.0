import { Component, Input, OnInit } from '@angular/core';
import { LandingPage } from '../../data/landing/model/landingPage.model';

@Component({
  selector: 'sbdl-landing-dive-deeper',
  templateUrl: './landing-dive-deeper.component.html',
  styleUrls: ['../landing-common.component.scss']
})
export class LandingDiveDeeperComponent implements OnInit {

  @Input()
  landingPage: LandingPage;
  
  constructor() { }

  ngOnInit() {
  }

}
