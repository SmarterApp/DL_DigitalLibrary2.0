import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sbdl-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent {
  constructor(private location: Location) {}
}
