import { SectionOptions } from './section.component';
import { DocumentSectionType } from '../outline/document-outline.model';

export const commentsSectionOptions: SectionOptions = {
  title: 'Things To Consider',
  fontAwesomeIcon: 'fa-comment-dots',
  iconBackground: 'blue',
  sectionType: DocumentSectionType.ThingsToConsider
};

export const instructionalUseOptions: SectionOptions = {
  title: 'Instructional Use',
  sbdlIcon: 'steps',
  iconBackground: 'yellow',
  sectionType: DocumentSectionType.Subsection
};

export const strategyInActionOptions: SectionOptions = {
  title: 'Strategy In Action',
  fontAwesomeIcon: 'fa-universal-access',
  iconBackground: 'green',
  sectionType: DocumentSectionType.Subsection
};

export const stepByStepOptions: SectionOptions = {
  title: 'Step-by-Step',
  sbdlIcon: 'steps',
  iconBackground: 'blue',
  sectionType: DocumentSectionType.StepByStep
};
