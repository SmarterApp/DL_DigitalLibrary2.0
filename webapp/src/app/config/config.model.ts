export interface IAppConfig {
    env: { name: string },
    logging: { console: boolean, aws: boolean },
    apiServer: { cdl: string },
    enableAnalytics: boolean
}