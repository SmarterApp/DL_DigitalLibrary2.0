export interface SearchRequestModel {
    query: string;
    
    // filters
    // TODO: What data type is each of these formats?
    grades: string[];
    subjects: string[];
    claims: string[];
    targets: string[];
}