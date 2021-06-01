import { TaglineSection } from './taglineSection.model';
import { HowItHelpsSection } from './howItHelpsSection.model';
import { CallToActionSection } from './callToActionSection.model';
import { HowToUseSection } from './howToUseSection.model';
import { DiveDeeperSection } from './diveDeeperSection.model';
import { SampleSection } from './sampleSection.model';

export interface LandingPage {
    type: string;
    taglineSection: TaglineSection;
    howItHelpsSection: HowItHelpsSection;
    callToActionSection : CallToActionSection;
    howToUseSection: HowToUseSection;
    diveDeeperSection: DiveDeeperSection;
    sampleSections: SampleSection;
    marketingGraphicUri: string;
    marketingVideoLink: string;
  }