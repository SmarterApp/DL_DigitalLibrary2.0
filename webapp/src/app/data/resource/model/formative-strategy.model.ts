import { FormativeAssessmentContent } from './formative-assessment-content.model';
import { Resource } from './resource.model';

export interface FormativeStrategyResource extends Resource {
  overview: {
    overview: string;
    studentBenefits: string;
    suggestedMaterials: string;
  };
  stepByStep: string;
  strategyInAction: FormativeAssessmentContent;
}
