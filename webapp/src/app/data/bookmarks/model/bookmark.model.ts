import { ResourceProperties } from '../../resource/model/properties.model';
import { ResourceType } from '../../resource/model/resource-type.enum';

export interface ResourceBookmark {
  id: number;
  type: ResourceType;
  properties: ResourceProperties;
  summary?: string;
  hasNotes: boolean;
}
