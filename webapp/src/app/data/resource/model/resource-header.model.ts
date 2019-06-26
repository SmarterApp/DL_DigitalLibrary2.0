// Mockup: https://sketch.cloud/s/3lW3m/a/zGOLo5
export interface ResourceHeaderModel {
    // /api/v1/resource.id
    resourceId: number;

    // /api/v1/resource.title
    title: string;

    // /api/v1/resource.subject
    subjects: string[];

    // /api/v1/resource.grades
    grades: string[];

    // /api/v1/resource.resourceThumbnailImage
    // as a base-64 encoded string.
    image: string;

    // /api/v1/resource.author
    author: string;

    // MAYBE (in payload but not in doc)
    // /api/v1/resource.changed
    lastModified: Date;
   
    // /api/v1/resource.learningGoals
    learningGoal: string;

    // UNKNOWN
    connectionsPlaylist: string[];

    // UNKNOWN
    claims: Alignment[];

    // MAYBE, but this is an array?
    // /api/v1/resource.targetsAlignmentShortnames
    targets: Alignment[];

    // MAYBE, but this is NOT an array?
    // /api/v1/resource.connectionToCcss
    standards: string[];   

    // UKNOWN
    favorited: boolean;
}

export interface Alignment {
    title: string;
    shortName: string;
}