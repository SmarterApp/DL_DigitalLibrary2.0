export interface SearchRequestModel {
    query: string;
    
    // filters
    // TODO: What data type is each of these formats?
    types: string[];
    grades: string[];
    subjects: string[];
    claims: string[];
    targets: string[];
    standards: string[];
}