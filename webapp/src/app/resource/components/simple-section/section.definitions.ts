import { SimpleSectionOptions } from './simple-section.component';
import { DocumentSectionType } from '../outline/document-outline.model';

export const commentsSectionOptions: SimpleSectionOptions = {
  title: 'Things To Consider',
  fontAwesomeIcon: 'fa-comment-dots',
  iconBackground: 'blue',
  sectionType: DocumentSectionType.ThingsToConsider
};

// Instructional Use is specific to Accessibility Strategies and takes the
// place of Step By Step.
export const instructionalUseSectionOptions: SimpleSectionOptions = {
  title: 'Instructional Use',
  sbdlIcon: 'steps',
  iconBackground: 'yellow',
  sectionType: DocumentSectionType.StepByStep
};

export const strategyInActionSectionOptions: SimpleSectionOptions = {
  title: 'Strategy In Action',
  fontAwesomeIcon: 'fa-universal-access',
  iconBackground: 'green',
  sectionType: DocumentSectionType.Subsection
};

export const stepByStepSectionOptions: SimpleSectionOptions = {
  title: 'Step-by-Step',
  sbdlIcon: 'steps',
  iconBackground: 'blue',
  sectionType: DocumentSectionType.StepByStep
};
