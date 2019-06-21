// These enum values align with NgxLoggerLevel in case we
// want to later replace our custom logger with ngx-logger 
// Right now, ngx-logger doesn't provide Angular 8 support: 
// https://github.com/dbfannin/ngx-logger/issues/122
export enum LoggerLevel {
    Trace = 0,
    Debug,
    Info,
    Log,
    Warn,
    Error,
    Fatal,
    Off
  }