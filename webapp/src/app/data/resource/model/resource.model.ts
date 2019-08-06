import { ResourceDetailsModel } from "./resource-details.model";
import { OverviewModel } from "./overview.model";
import { ResourceStepModel } from "./resource-step.model";
import { ResourceStrategyModel } from "./resource-strategy.model";
import { InstructionalMaterialModel } from "./instructional-material.model";
import { ResourceType } from './resource-type.enum';
import { DifferentiationModel } from './differentiation.model';
import { FormativeModel } from './formative.model';

export interface ResourceModel {
    // /api/v1/resource.id
    resourceId: number;

    // /api/v1/resource.resourceType
    resourceType: ResourceType;

    details: ResourceDetailsModel;
    overview: OverviewModel;
    steps: ResourceStepModel[];
    materials: InstructionalMaterialModel[];
    differentiation: DifferentiationModel;
    formative: FormativeModel;
} 