import { ResourceType } from './resource-type.enum';

export interface ResourceStrategyReference {
  id: number;
  type: ResourceType;
  title: string;
  description: string;
}
