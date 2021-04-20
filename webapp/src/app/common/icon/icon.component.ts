import { Component, Input, OnInit } from '@angular/core';
import { OnMount } from '../controls/dynamic/interfaces';

/**
 * This component is responsible for rendering an SVG icon.
 */
@Component({
  selector: 'sbdl-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnMount {
  dynamicOnMount(attrs?: Map<string, string>, content?: string, element?: Element): void {
    this.icon = attrs.get('icon');
  }

  @Input()
  icon: string;

}
