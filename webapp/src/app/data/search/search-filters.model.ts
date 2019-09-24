export interface SearchFilters {
    freeText: string;
    resourceTypes: Filter[] 
}

export interface Filter {
    title: string;
    code: string;
}