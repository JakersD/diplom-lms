import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { EConfig } from './config';

@Module({
    imports: [MongooseModule.forRoot(EConfig.MONGO_URI), UsersModule, AdminModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
