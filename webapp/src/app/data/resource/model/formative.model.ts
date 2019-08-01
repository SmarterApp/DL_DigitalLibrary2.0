import { ResourceStrategyModel } from './resource-strategy.model';

export interface FormativeModel {

    // maybe api/v1/resource.connectionToFap
    howItsUsed: string;
    strategies: ResourceStrategyModel[]
}