import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000, () => {
    console.log("UserServer is working on port ", 3000);

  });
}
bootstrap();
