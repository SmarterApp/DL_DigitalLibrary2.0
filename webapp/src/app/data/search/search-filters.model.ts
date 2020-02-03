export interface SearchFilters {
  query: string;
  resourceTypes: Filter[];
  grades: Filter[];
  subjects: Filter[];
  claims: Filter[];
  targets: Filter[];
  standards: Filter[];
}

export interface Filter {
  title: string;
  code: string;
  selected?: boolean;
}

export const emptyFilters: SearchFilters = {
  query: '',
  resourceTypes: [],
  grades: [],
  subjects: [],
  claims: [],
  targets: [],
  standards: []
};
