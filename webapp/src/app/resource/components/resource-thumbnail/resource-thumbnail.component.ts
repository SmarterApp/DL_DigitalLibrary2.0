import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'sbdl-resource-thumbnail',
  templateUrl: './resource-thumbnail.component.html',
  styleUrls: ['./resource-thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceThumbnailComponent {

  @Input()
  @HostBinding('class')
  subjectCode: string;

  @Input()
  url: string;

}
