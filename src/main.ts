import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as config from 'config';
import { Logger, ValidationPipe } from '@nestjs/common';

const serverConfig = config.get('server');

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const port = process.env.PORT || serverConfig.port;

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Monwise Community')
    .setDescription('Monwise Community API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
