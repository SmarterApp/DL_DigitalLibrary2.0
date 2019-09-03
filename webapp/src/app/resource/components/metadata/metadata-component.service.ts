import { Injectable } from '@angular/core';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

@Injectable({
  providedIn: 'root'
})
export class MetadataComponentService {
  readonly strategyMetadataMap: Map<ResourceType, StaticMetadata> = new Map([
    [ 
      ResourceType.Professional, <StaticMetadata>{
      resourceType: 'Professional Learning'
    } ], [ 
      ResourceType.AccessibilityStrategy, {
      resourceType: 'Accessibility Strategy',
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
        resourceType: 'Formative Strategy',
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
  resourceType: string;
  linkTitle: string;
  links: MoreInfoLink[];
}

export interface MoreInfoLink {
  title: string;
  subtitle: string;
  url: string;
  faIcon: string;
}
