import helmet from '@fastify/helmet';
import fastifyRateLimiter from '@fastify/rate-limit';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { GLOBAL_API_PREFIX } from '@starter/api-types';

import { AppModule } from './app.module';

/**
 * The endpoint for open api ui
 * @type {string}
 */
export const OPEN_API_ROOT = 'api/docs';
/**
 * The name given to the api
 * @type {string}
 */
export const OPEN_API_NAME = 'API';
/**
 * A short description for api
 * @type {string}
 */
export const OPEN_API_DESCRIPTION = 'API Description';
/**
 * Current version of the api
 * @type {string}
 */
export const OPEN_API_CURRENT_VERSION = '1.0';

async function bootstrap() {
  const logger = new Logger('BOOTSTRAP');
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle(OPEN_API_NAME)
    .setDescription(OPEN_API_DESCRIPTION)
    .setVersion(OPEN_API_CURRENT_VERSION)
    .addBearerAuth()
    .build();

  // Remark: this is to make the Angular ui function as expected. DO NOT USE IN PRODUCTION
  app.enableCors({
    origin: '*',
  });
  app.register(helmet, {
    contentSecurityPolicy: {
      // Remark: this is to make the Angular ui function as expected
      directives: {
        'script-src-attr': ["'unsafe-inline'"],
      },
    },
  });

  app.register(fastifyRateLimiter, {
    max: 100,
    timeWindow: '1 minute',
  });
  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix(GLOBAL_API_PREFIX);

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(OPEN_API_ROOT, app, document);

  const port = process.env.PORT || 3333;

  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);

  logger.log(
    `🚀 Application is running on: http://localhost:${port}${GLOBAL_API_PREFIX}`,
  );
}

bootstrap();
