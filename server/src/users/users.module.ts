import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt-auth.strategy';
import { UsersSchema } from './schemas/users.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [UsersController],
    providers: [UsersService, LocalStrategy, JwtStrategy],
    exports: [UsersService],
})
export class UsersModule {}
