import { Pipe, PipeTransform } from '@angular/core';
import { ResourceType } from '../data/resource/model/resource-type.enum';

@Pipe({
  name: 'resourceType'
})
export class ResourceTypePipe implements PipeTransform {
  readonly resourceTypeMap: Map<ResourceType, string> = new Map([
    [ ResourceType.Instructional, 'Instructional Resource' ],
    [ ResourceType.Professional, 'Professional Learning Resource' ],
    [ ResourceType.FormativeStrategy, 'Formative Strategy' ],
    [ ResourceType.AccessibilityStrategy, 'Accessibility Strategy' ],
    [ ResourceType.ConnectionsPlaylist, 'Connections Playlist' ]
  ]);

  transform(value: any, args?: any): any {
    return this.resourceTypeMap.get(value) || '';
  }
}
