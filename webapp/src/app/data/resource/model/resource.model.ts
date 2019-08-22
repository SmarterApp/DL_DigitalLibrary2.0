import { ResourceDetailsModel } from "./resource-details.model";
import { OverviewModel } from "./overview.model";
import { ResourceStepModel } from "./resource-step.model";
import { AttachmentModel } from "./attachment.model";
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
    attachments: AttachmentModel[];
    comments: string;
    differentiation: DifferentiationModel;
    formative: FormativeModel;
} 