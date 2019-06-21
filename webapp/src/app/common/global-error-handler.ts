import { ErrorHandler, Injectable } from '@angular/core';
import { LoggingService } from './logging/logging.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private logger: LoggingService) { }

    handleError(error) {
        this.logger.error(error);
    }
}
