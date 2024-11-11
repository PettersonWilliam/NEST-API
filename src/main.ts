import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module'; // primeiro modulo carregdo na aplicacao

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.PORT ?? 4000);
}

bootstrap();