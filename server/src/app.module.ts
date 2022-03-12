import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EConfig } from './config';

@Module({
    imports: [MongooseModule.forRoot(EConfig.MONGO_URI), AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
