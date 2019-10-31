export interface SearchFilters {
    freeText: string;
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
}

export const emptyFilters: SearchFilters = {
  freeText: '',
  resourceTypes: [],
  grades: [],
  subjects: [],
  claims: [],
  targets: [],
  standards: []
};
