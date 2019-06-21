import { LoggerLevel } from '../logging/logger-level.enum';

export interface IAppConfig {
    env: { name: string },
    logging: { console: boolean, aws: boolean, level: LoggerLevel },
    apiServer: { cdl: string },
    enableAnalytics: boolean
}