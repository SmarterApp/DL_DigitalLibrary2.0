import { Component, Input, OnInit } from '@angular/core';

/**
 * This component is responsible for rendering an SVG icon.
 */
@Component({
  selector: 'sbdl-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {

  @Input()
  icon: string;

}
