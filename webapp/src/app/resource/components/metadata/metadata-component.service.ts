import { Injectable } from '@angular/core';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

/**
 * Metadata Component Service which returns static data for the metadata component.
 * This is returned as a service instead of static constants because it is unclear at this time
 * whether this should be returned by the api or stored as json data on the client.
 */
@Injectable({
  providedIn: 'root'
})
export class MetadataComponentService {
  readonly strategyMetadataMap: Map<ResourceType, StaticMetadata> = new Map([
    [
      ResourceType.Professional, <StaticMetadata>{
        // TODO: Add links if provided from team.
      }
    ], [
      ResourceType.AccessibilityStrategy, {
      linkTitle: 'Learn more about accessibility',
      links: [ <MoreInfoLink>{
          title: 'Usability, Accessibility, and Accommodations Guidelines',
          url: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf',
          faIcon: 'fa-file-pdf'
        }, <MoreInfoLink>{
          title: 'Individual Student Assessment Accessibility Profile (ISAAP) Tool',
          url: 'https://portal.smarterbalanced.org/library/en/about-the-individual-student-assessment-accessibility-profile-isaap-process-and-the-isaap-tool.pdf',
          faIcon: 'fa-file-pdf'
        }
      ]
    } ], [
      ResourceType.FormativeStrategy, {
        linkTitle: 'Learn how this strategy relates to  the Formative Assessment Process',
        links: [ <MoreInfoLink>{
          title: 'Formative Assessment Process Flier',
          url: 'https://portal.smarterbalanced.org/library/en/formative-assessment-process.pdf',
          faIcon: 'fa-file-pdf'
        }, <MoreInfoLink>{
          title: 'Quotes for Understanding the Formative Assessment Process',
          url: 'https://portal.smarterbalanced.org/library/en/formative-assessment-process.pdf',
          faIcon: 'fa-file-pdf'
        }]
      }
    ]
  ]);

  constructor() { }

  getStaticMetadata(resourceType: ResourceType): StaticMetadata {
    return this.strategyMetadataMap.get(resourceType);
  }
}

export interface StaticMetadata {
  linkTitle: string;
  links: MoreInfoLink[];
}

export interface MoreInfoLink {
  title: string;
  subtitle: string;
  url: string;
  faIcon: string;
}
