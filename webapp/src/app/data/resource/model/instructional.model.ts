import {FormativeAssessmentContent} from './formative-assessment-content.model';
import {Resource} from './resource.model';
import {ResourceStep} from './step.model';
import {ResourceStrategyReference} from './strategy-reference.model';

export interface InstructionalResource extends Resource {
  getStarted: InstructionalResourceGettingStarted;
  stepByStep: ResourceStep[];
  accessibilityStrategies: ResourceStrategyReference[];
  formativeAssessmentStrategies: ResourceStrategyReference[];
  differentiation: string;
  formativeAssessHowTo: FormativeAssessmentContent;
  listConnectionsPlaylists: PlaylistResourceLink[];
}

export interface InstructionalResourceGettingStarted {
  overview: string;
  learningGoal: string;
  successCriteria: string;
}

export interface PlaylistResourceLink {
  id: number;
  title: string;
  count: number;
  image: string;
}

