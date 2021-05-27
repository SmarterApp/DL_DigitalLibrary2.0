import { LoggerLevel } from '../logging/logger-level.enum';

export interface IAppConfig {
    env: { name: string };
    logging: { console: boolean, aws: boolean, level: LoggerLevel };
    tenantConfigPath: string;
    apiServerHost: string;
    api2pdfHost: string;
    api2pdfAuthorization: string;
    api2pdfIsDockerVersion: boolean;
    interimItemPortalUrl: string;
    enableAnalytics: boolean;
    GA4AnalyticsTrackingId: string;
    okta: { clientId: string, issuer: string };
}
