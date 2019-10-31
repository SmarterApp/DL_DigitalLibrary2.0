import { ResourceLinkModel } from './resource-link.model';

export interface TopicSectionModel {
    topics: TopicModel[];
    suggestionsForIntervention: string;
}

export interface TopicModel {
    resourceLinks: ResourceLinkModel[];
    title: string;
    above: string;
    near: string;
    below: string;
}