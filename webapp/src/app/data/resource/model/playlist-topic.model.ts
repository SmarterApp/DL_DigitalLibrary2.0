import { ResourceType } from './resource-type.enum';

export interface PlaylistTopic {
  title: string;
  below: string;
  near: string;
  above: string;
  topicResources: { id: string, type: ResourceType, title: string }[];
}
