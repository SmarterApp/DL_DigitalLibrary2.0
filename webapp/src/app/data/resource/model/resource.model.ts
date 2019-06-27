import { ResourceHeaderModel } from "./resource-header.model";
import { OverviewModel } from "./overview.model";
import { ResourceStepModel } from "./resource-step.model";
import { ResourceStrategyModel } from "./resource-strategy.model";
import { InstructionalMaterialModel } from "./instructional-material.model";

export interface ResourceModel {
    header: ResourceHeaderModel;
    overview: OverviewModel;
    steps: ResourceStepModel[];
    materials: InstructionalMaterialModel[];
    
    // The UI for Formative Strategies and Accessibility Strategies 
    // look very similar.  If it makes sense, we can use the same model
    // for both for reusability on the UI components.
    formativeStrategies: ResourceStrategyModel[];
    accessibilityStrategies: ResourceStrategyModel[];
}