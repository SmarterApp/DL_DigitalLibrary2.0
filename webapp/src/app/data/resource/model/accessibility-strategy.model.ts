import { Resource } from './resource.model';

export interface AccessibilityStrategyResource extends Resource {
  overview: {
    overview: string;
    studentBenefits: string;
    suggestedMaterials: string;
  };
  stepByStep: string;
  strategyInAction: {
    linkToSample: string;
    description: string;
  };
}
