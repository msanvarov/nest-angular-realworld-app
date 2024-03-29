import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { IMessage } from '@starter/api-types';

/**
 * Application Service
 */
@Injectable()
export class AppService {
  /**
   * Constructor
   * @param {Logger} logger logging service
   */
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  /**
   * Returns a welcome message.
   * @returns {string} welcome message
   */
  getRootMessage(): IMessage {
    this.logger.info('Calling getRootMessage -> ', AppService.name);

    return {
      message: 'Welcome to api! Navigate to api/docs for documentation.',
    };
  }
}
