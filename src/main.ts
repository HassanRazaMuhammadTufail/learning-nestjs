import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/logger.middleware';
import { HttpExceptionFilter } from './exceptionHandlers/http-exception.filter'; 
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  //handling globally
  app.useGlobalFilters(new HttpExceptionFilter());
  //global middleware here
  app.use(logger)
  await app.listen(3000);
}
bootstrap();
