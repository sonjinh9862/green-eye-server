import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug'],
  });
  await app.listen(3002);
  await app.enableCors({
    origin: true,
    credentials: true,
  });
}
bootstrap();
