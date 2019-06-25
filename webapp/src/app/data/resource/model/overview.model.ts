// Mockup: https://sketch.cloud/s/3lW3m/a/zGOLo5
export interface OverviewModel {
    // MAYBE
    // /api/v1/resource.altBody 
    description: string;

    // UNKNOWN
    resourceMaterials: ResourceMaterial[]

    // UNKNOWN
    differentiation: string;

    // /api/v1/resource.successCriteria
    successCriteria: string;
}

export interface ResourceMaterial {
    // UNKNOWN
    title: string;

    // UNKNOWN
    url: string;

    // UNKNOWN
    description: string;
}