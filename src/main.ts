import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Konfiguriere die CORS-Einstellungen
  const corsOptions: cors.CorsOptions = {
    origin: 'http://localhost:3000', // Hier sollte die URL deines Frontends stehen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };

  app.use(cors(corsOptions));

  await app.listen(4000); // Behalte den Port bei 4000

  console.log('App is running on port 4000');
}

bootstrap();
