import { Resource } from './resource.model';
import { ResourceStep } from './step.model';
import { ResourceStrategyReference } from './strategy-reference.model';

export interface ProfessionalLearningResource extends Resource {
  overview: {
    overview: string;
    learningGoal: string;
    successCriteria: string;
  };
  stepByStep: ResourceStep[];
  accessibilityStrategies: ResourceStrategyReference[];
  formativeAssessmentStrategies: ResourceStrategyReference[];
}
