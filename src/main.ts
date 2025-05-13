import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  try {
    await app.listen(4000, '0.0.0.0');
    console.log('Server is running on http://localhost:4000');
  } catch (error) {
    console.error('Error starting server:', error);
  }
}
bootstrap();