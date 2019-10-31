import { ResourceAttachment } from './attachment.model';
import { ResourceType } from './resource-type.enum';
import { ResourceProperties } from './properties.model';

export interface Resource {
  id: number;
  type: ResourceType;
  properties: ResourceProperties;
  attachments: ResourceAttachment[];
  thingsToConsider: string;
}
