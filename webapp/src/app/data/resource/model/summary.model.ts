import { ResourceProperties } from './properties.model';
import { ResourceType } from './resource-type.enum';

export interface ResourceSummary {
  id: number;
  type: ResourceType;
  properties: ResourceProperties;
  summary: string;
}
