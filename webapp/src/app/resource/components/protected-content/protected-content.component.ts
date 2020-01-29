import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'sbdl-protected-content',
  templateUrl: './protected-content.component.html',
  styleUrls: ['./protected-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProtectedContentComponent {

  @Input()
  authenticated: boolean;

  @HostBinding('class.obscured')
  get obscured(): boolean {
    return !this.authenticated;
  }

}
