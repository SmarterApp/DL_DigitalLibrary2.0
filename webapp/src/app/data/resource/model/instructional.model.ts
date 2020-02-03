import { FormativeAssessmentContent } from './formative-assessment-content.model';
import { Resource } from './resource.model';
import { ResourceStep } from './step.model';
import { ResourceStrategyReference } from './strategy-reference.model';

export interface InstructionalResource extends Resource {
  getStarted: {
    overview: string;
    learningGoal: string;
    successCriteria: string;
  };
  stepByStep: ResourceStep[];
  accessibilityStrategies: ResourceStrategyReference[];
  formativeAssessmentStrategies: ResourceStrategyReference[];
  differentiation: string;
  formativeAssessHowTo: FormativeAssessmentContent;
}
