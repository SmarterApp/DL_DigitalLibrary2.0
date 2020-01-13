import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sbdl-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent {
  constructor(location: Location) {}
}
