import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ResourceProperties} from 'src/app/data/resource/model/properties.model';

@Component({
  selector: 'sbdl-resource-properties',
  templateUrl: './resource-properties.component.html',
  styleUrls: ['./resource-properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcePropertiesComponent {

  @Input()
  properties: ResourceProperties;

}
