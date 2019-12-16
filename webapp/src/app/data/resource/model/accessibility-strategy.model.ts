import { Resource } from './resource.model';

export interface AccessibilityStrategyResource extends Resource {
  stratOverviewContent: {
    overview: string;
    studentBenefits: string;
    suggestedMaterial: string;
  };
  instructionalUse: string;
  sampleItemContent: {
    linkToSample: string;
    description: string;
  };
}
