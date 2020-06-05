import { Pipe, PipeTransform } from '@angular/core';
import { ResourceType } from '../data/resource/model/resource-type.enum';

@Pipe({
  name: 'resourceType'
})
export class ResourceTypePipe implements PipeTransform {
  readonly names: Map<ResourceType, string> = new Map([
    [ ResourceType.Instructional, 'Instructional Resource' ],
    [ ResourceType.ProfessionalLearning, 'Professional Learning Resource' ],
    [ ResourceType.FormativeStrategy, 'Formative Strategy' ],
    [ ResourceType.AccessibilityStrategy, 'Accessibility Strategy' ],
    [ ResourceType.ConnectionsPlaylist, 'Interim Connections Playlist' ]
  ]);

  readonly pluralNames: Map<ResourceType, string> = new Map([
    [ ResourceType.Instructional, 'Instructional Resources' ],
    [ ResourceType.ProfessionalLearning, 'Professional Learning' ],
    [ ResourceType.FormativeStrategy, 'Formative Strategies' ],
    [ ResourceType.AccessibilityStrategy, 'Accessibility Strategies' ],
    [ ResourceType.ConnectionsPlaylist, 'Interim Connections Playlists' ]
  ]);

  readonly slugs: Map<ResourceType, string> = new Map([
    [ ResourceType.Instructional, 'instructional' ],
    [ ResourceType.ProfessionalLearning, 'professional-learning' ],
    [ ResourceType.FormativeStrategy, 'formative-strategy' ],
    [ ResourceType.AccessibilityStrategy, 'accessibility-strategy' ],
    [ ResourceType.ConnectionsPlaylist, 'connections-playlist' ]
  ]);

  transform(value: any, args?: any): any {
    if (args && args.slug) {
      return this.slugs.get(value) || '';
    } else if (args && args.plural) {
      return this.pluralNames.get(value) || '';
    } else {
      return this.names.get(value) || '';
    }
  }
}
