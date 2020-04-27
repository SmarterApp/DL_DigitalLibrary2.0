import { Component, Input } from '@angular/core';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

@Component({
  selector: 'sbdl-resource-type-icon',
  templateUrl: './resource-type-icon.component.html'
})
export class ResourceTypeIconComponent {
  @Input()
  type: ResourceType;

  resourceTypes = ResourceType;
}
