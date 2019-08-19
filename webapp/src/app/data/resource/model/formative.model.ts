import { ResourceStrategyModel } from './resource-strategy.model';

export interface FormativeModel {

    // maybe api/v1/resource.connectionToFap
    howItsUsed: string;

    // new structured format which doesn't exist in DL 1.0
    formativeAssessmentProcess: FormativeAssessmentProcess;
    strategies: ResourceStrategyModel[]
}

export interface FormativeAssessmentProcess {
    clarifyIntendedLearning: string;
    elicitEvidence: string;
    interpretEvidence: string;
    actOnEvidence: string;
}