export interface SampleSection {
    header: string;
    sampleResources: SampleResources[];
}
    
export interface SampleResources {
    id: number;
    title: string;
    detail: string;
}