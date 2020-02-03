import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggingService } from './logging/logging.service';
import { TftErrorService } from './tft-error.service';
import { TftErrorType } from './tft-error-type.enum';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private logger: LoggingService;
  private errorService: TftErrorService;

  /*
   * https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
   * Since ErrorHandler has to be loaded prior to any other part the app, including AppConfig settings that
   * the LoggingService uses, we have to use Angular's injector to get the logging service much later
   * when handleError is invoked rather than in the constructor.
   */
  constructor(private injector: Injector) { }

  handleError(error) {
    if (!this.logger) {
      this.logger = this.injector.get(LoggingService);
    }

    if (!this.errorService) {
      this.errorService = this.injector.get(TftErrorService);
    }

    if (this.logger) {
      this.logger.error(error);
    }

    if (this.errorService) {
      this.errorService.redirectTftError({ type: TftErrorType.Unknown, details: error.toString() });
    }

    throw error;
  }
}
