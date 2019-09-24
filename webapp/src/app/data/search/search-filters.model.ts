export interface SearchFilters {
    resourceTypes: Filter[] 
}

export interface Filter {
    title: string;
    code: string;
}