import { ResourceStrategyModel } from './resource-strategy.model'

export interface DifferentiationModel {
    performanceBasedDifferentiation: string;
    accessibilityStrategies: ResourceStrategyModel[];
}