import { ResourceStrategyConnection } from './resource-strategy.model'

export interface DifferentiationModel {
    performanceBasedDifferentiation: string;
    accessibilityStrategies: ResourceStrategyConnection[];
}