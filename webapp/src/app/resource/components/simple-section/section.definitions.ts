import { SimpleSectionOptions } from './simple-section.component';
import { DocumentSectionType } from '../outline/document-outline.model';

export const commentsSectionOptions: SimpleSectionOptions = {
  title: 'Things To Consider',
  fontAwesomeIcon: 'fa-comment-dots',
  iconBackground: 'blue',
  sectionType: DocumentSectionType.ThingsToConsider
};

export const instructionalUseOptions: SimpleSectionOptions = {
  title: 'Instructional Use',
  sbdlIcon: 'steps',
  iconBackground: 'yellow',
  sectionType: DocumentSectionType.Subsection
};

export const strategyInActionOptions: SimpleSectionOptions = {
  title: 'Strategy In Action',
  fontAwesomeIcon: 'fa-universal-access',
  iconBackground: 'green',
  sectionType: DocumentSectionType.Subsection
};

export const stepByStepOptions: SimpleSectionOptions = {
  title: 'Step-by-Step',
  sbdlIcon: 'steps',
  iconBackground: 'blue',
  sectionType: DocumentSectionType.StepByStep
};
