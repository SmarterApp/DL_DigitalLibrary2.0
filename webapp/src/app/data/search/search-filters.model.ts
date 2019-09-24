export interface SearchFilters {
    freeText: string;
    resourceTypes: Filter[];
    grades: Filter[];
    subjects: Filter[];
    claims: Filter[];
}

export interface Filter {
    title: string;
    code: string;
}