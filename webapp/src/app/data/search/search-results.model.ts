import { ResourceType } from '../resource/model/resource-type.enum';
import { Claim } from '../resource/model/claim.model';
import { Target } from '../resource/model/target.model';
import { SearchFilters } from './search-filters.model';
import { ResourceSummary } from '../resource/model/summary.model';

export interface SearchResults {
    filters: SearchFilters;
    results: ResourceSummary[];
}
