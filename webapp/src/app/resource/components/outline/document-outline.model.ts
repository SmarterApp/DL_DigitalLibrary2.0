import { Map } from 'immutable';
import { PrintableSectionComponent } from '../../printable-section.component';

/* This enum is internal. It's values are used to categorize and generate
 * identifiers for the relevant section types.*/
export enum DocumentSectionType {
  Overview = 'overview',
  ThingsToConsider = 'things-to-consider',
  Differentiation = 'differentiation',
  Formative = 'formative',
  StepByStep = 'step-by-step',
  Attachments = 'attachments',
  AssessmentInfo = 'assessment-info',
  StrategyInAction = 'strategy-in-action',
  PlaylistTopics = 'playlist-topics',
  PlaylistInterim = 'playlist-interim',

  Subsection = 'subsection'
}

export type DocumentOutline = Map<DocumentSectionType, DocumentSection>;

export interface DocumentSection {
  canPrint: boolean;
  component: PrintableSectionComponent;
  elementRef: any;
  fontAwesomeIcon?: string;
  sbdlIcon?: string;
  selectedForPrint: boolean;
  subsections?: DocumentSection[];
  subsectionsNumbered?: boolean;
  title: string;
  type: DocumentSectionType;
}
