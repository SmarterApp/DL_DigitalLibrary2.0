export interface SearchRequestModel {
    Search_Text: string;

    // filters
    // TODO: What data type is each of these formats?
    Resource_Type: string[];
    Grade: string[];
    Subject: string[];
    Claim: string[];
    Target: string[];
    Standard: string[];
}
