import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/logger.middleware';
import { HttpExceptionFilter } from './exceptionHandlers/http-exception.filter'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //handling globally
  app.useGlobalFilters(new HttpExceptionFilter());
  //global middleware here
  app.use(logger)
  await app.listen(3000);
}
bootstrap();
