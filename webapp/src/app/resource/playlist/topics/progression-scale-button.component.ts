import { AfterViewInit, Component, Input } from '@angular/core';


@Component({
  selector: 'sbdl-progression-scale-button',
  templateUrl: './progression-scale-button.component.html',
  styleUrls: ['./progression-scale-button.component.scss']
})
export class ProgressionScaleButtonComponent {

  @Input()
  scale: ScaleValue;

  @Input()
  collapsed: boolean;

  private SCALE_TITLES = new Map<string, string>([
    ['above', 'Above'],
    ['near', 'Near'],
    ['below', 'Below']
  ]);

  get scaleTitle() {
    return this.SCALE_TITLES.get(this.scale);
  }

}

export type ScaleValue = 'above' | 'near' | 'below';
