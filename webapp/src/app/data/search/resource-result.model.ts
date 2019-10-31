import { ResourceType } from '../resource/model/resource-type.enum';
import { Claim } from '../resource/model/claim.model';
import { Target } from '../resource/model/target.model';
import { SearchFilters } from './search-filters.model';

export interface ResourceSearchResults {
    filters: SearchFilters;
    results: ResourceResult[];
}

export interface ResourceResult {
    id: number;
    title: string;
    type: ResourceType;
    image: string;
    description: string;
    subjects: string[];
    grades: number[];
    claims: Claim[];
    targets: Target[];
}
