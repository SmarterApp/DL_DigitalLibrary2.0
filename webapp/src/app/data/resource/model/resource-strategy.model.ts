// Used by Formative Strategies https://sketch.cloud/s/3lW3m/a/JDp0Vb
// and Accessibility Strategies https://sketch.cloud/s/3lW3m/a/vJvYAJ
export interface ResourceStrategyModel {
    // UNKNOWN (new concept in DL 2.0?)
    strategyAttribute: string;

    // UNKNOWN (new concept in DL 2.0?)
    connections: ResourceStrategyConnection[]
}

export interface ResourceStrategyConnection {
    // UNKNOWN
    title: string;

    // UNKNOWN
    description: string;

    // UNKNOWN
    moreAboutUrl: string;
}