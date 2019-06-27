import { ResourceType } from '../data/resource/model/resource-type.enum';
import { ResourceModel } from '../data/resource/model/resource.model';

export interface ResourceComponent {
    appliesTo(resourceType: ResourceType):boolean;
    model: ResourceModel;
}