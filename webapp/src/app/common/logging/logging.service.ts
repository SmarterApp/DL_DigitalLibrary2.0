import { Injectable } from '@angular/core';
import { AppConfig } from '../config/app.config';
import { LoggerLevel } from './logger-level.enum';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private readonly configuredLevel = AppConfig.settings.logging.level;
  private readonly consoleSeverityLoggers = [
    { severity: LoggerLevel.Trace, log: (message) => console.trace(message), logParams: (message, params) => console.trace(message, params) },
    { severity: LoggerLevel.Debug, log: (message) => console.debug(message),  logParams: (message, params) => console.debug(message, params) },
    { severity: LoggerLevel.Info, log: (message) => console.info(message),  logParams: (message, params) => console.info(message, params) },
    { severity: LoggerLevel.Warn, log: (message) => console.warn(message),  logParams: (message, params) => console.warn(message, params) },
    { severity: LoggerLevel.Error, log: (message) => console.error(message),  logParams: (message, params) => console.error(message, params) }
  ];

  constructor() {
  }

  log(severity: LoggerLevel, message: string, params?: any) {
    if (severity >= this.configuredLevel) {
      const consoleLogger = this.consoleSeverityLoggers.find(x => x.severity === severity);
      if (consoleLogger) {
        if (params !== null && params !== undefined) {
          consoleLogger.logParams(message, params);
        } else {
          consoleLogger.log(message);
        }
      }
    }
  }

  trace(message: string, params?: any) {
    this.log(LoggerLevel.Trace, message, params);
  }

  debug(message: string, params?: any) {
    this.log(LoggerLevel.Debug, message, params);
  }

  info(message: string, params?: any) {
    this.log(LoggerLevel.Info, message, params);
  }

  warn(message: string, params?: any) {
    this.log(LoggerLevel.Warn, message, params);
  }

  error(message: string, params?: any) {
    this.log(LoggerLevel.Error, message, params);
  }
}
