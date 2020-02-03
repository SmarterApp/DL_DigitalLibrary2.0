import { Resource } from './resource.model';
import { PlaylistTopic } from './playlist-topic.model';

export interface PlaylistResource extends Resource {
  overview: {
    description: string;
    importance: string;
    academicVocabulary: string;
    interventionSuggestions: string;
  };

  topics: PlaylistTopic[];
}
