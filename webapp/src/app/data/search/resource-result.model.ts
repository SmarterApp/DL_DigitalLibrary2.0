import { ResourceType } from '../resource/model/resource-type.enum';
import { Alignment } from '../resource/model/resource-details.model';
import { SearchFilters } from './search-filters.model';

export interface ResourceSearchResults {
    filters: SearchFilters;
    results: ResourceResult[];
}

export interface ResourceResult {
    id: number;
    title: string;
    resourceType: ResourceType;
    image: string;
    description: string;
    subjects: string[];
    grades: number[];
    claims: Alignment[];
    targets: Alignment[];
}