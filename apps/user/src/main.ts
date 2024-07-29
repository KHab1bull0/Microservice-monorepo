import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(3000, () => {
    console.log("UserServer is working on port ", 3000);
    
  });
}
bootstrap();
