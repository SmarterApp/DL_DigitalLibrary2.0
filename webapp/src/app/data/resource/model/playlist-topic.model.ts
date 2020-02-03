import { ResourceType } from './resource-type.enum';

export interface PlaylistTopic {
  title: string;
  below: string;
  near: string;
  above: string;
  topicResources: { id: number, type: ResourceType, title: string }[];
}
