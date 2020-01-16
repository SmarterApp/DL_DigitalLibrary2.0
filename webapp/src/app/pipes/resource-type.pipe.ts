import { Pipe, PipeTransform } from '@angular/core';
import { ResourceType } from '../data/resource/model/resource-type.enum';

@Pipe({
  name: 'resourceType'
})
export class ResourceTypePipe implements PipeTransform {
  readonly resourceTypeMap: Map<ResourceType, string> = new Map([
    [ ResourceType.Instructional, 'Instructional Resource' ],
    [ ResourceType.ProfessionalLearning, 'Professional Learning Resource' ],
    [ ResourceType.FormativeStrategy, 'Formative Strategy' ],
    [ ResourceType.AccessibilityStrategy, 'Accessibility Strategy' ],
    [ ResourceType.ConnectionsPlaylist, 'Connections Playlist' ]
  ]);

  readonly resourceTypeSlugMap: Map<ResourceType, string> = new Map([
    [ ResourceType.Instructional, 'instructional' ],
    [ ResourceType.ProfessionalLearning, 'professional-learning' ],
    [ ResourceType.FormativeStrategy, 'formative-strategy' ],
    [ ResourceType.AccessibilityStrategy, 'accessibility-strategy' ],
    [ ResourceType.ConnectionsPlaylist, 'connections-playlist' ]
  ]);

  transform(value: any, args?: any): any {
    if (args && args.slug) {
      return this.resourceTypeSlugMap.get(value) || '';
    } else {
      return this.resourceTypeMap.get(value) || '';
    }
  }
}
