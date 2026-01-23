import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';
  app.useGlobalPipes(new ValidationPipe());

  // CORS
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // ✅ Swagger (CORRETO)
  const config = new DocumentBuilder()
    .setTitle('Farmácia API')
    .setDescription('Documentação da API da Farmácia')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = Number(process.env.PORT) || 3001;
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Backend rodando na porta ${port}`);
}

bootstrap();
