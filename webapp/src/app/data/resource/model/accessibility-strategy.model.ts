import { Resource } from './resource.model';

export interface AccessibilityStrategyResource extends Resource {
  overview: {
    overview: string;
    studentBenefits: string;
    suggestedMaterials: string;
  };
  instructionalUse: string;
  sampleItemContent: {
    linkToSample: string;
    description: string;
  };
}
