import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module'; // primeiro modulo carregdo na aplicacao
import { ValidationPipe } from '@nestjs/common'; // importando o pipe de validacao

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove campos que nao estao no DTO
    forbidNonWhitelisted: true, // retorna um erro se tiver campos que nao estao no DTO
    transform: false
  }));
  await app.listen(process.env.PORT ?? 4001);
}

bootstrap();
