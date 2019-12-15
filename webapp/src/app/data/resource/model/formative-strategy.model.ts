import { FormativeAssessmentContent } from './formative-assessment-content.model';
import { Resource } from './resource.model';

export interface FormativeStrategyResource extends Resource {
  stratOverviewContent: {
    overview: string;
    studentBenefits: string;
    suggestedMaterial: string;
  };
  stepByStep: string;
  strategyAction: FormativeAssessmentContent;
}
