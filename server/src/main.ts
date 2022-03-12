import { NestFactory } from '@nestjs/core';
import { EConfig } from './config';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(EConfig.PORT);
}
bootstrap();
