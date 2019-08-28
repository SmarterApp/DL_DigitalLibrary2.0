// Mockup: https://sketch.cloud/s/3lW3m/a/zGOLo5
export interface OverviewModel {
    // MAYBE
    // /api/v1/resource.altBody 
    description: string;

    // /api/v1/resource.learningGoals
    learningGoal: string;

    // UNKNOWN
    resourceMaterials: ResourceMaterial[];

    // UNKNOWN
    differentiation: string;

    // /api/v1/resource.successCriteria
    successCriteria: string;

    studentBenefits: string;

    suggestedMaterials: string;
}

export interface ResourceMaterial {
    // UNKNOWN
    title: string;

    // UNKNOWN
    url: string;

    // UNKNOWN
    description: string;
}