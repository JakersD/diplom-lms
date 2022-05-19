import { Body, Controller, Get, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { omit } from 'lodash';

import { UsersService } from './users.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { User } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
    constructor(private authService: UsersService) {}

    @Post('/auth/signup')
    async signUp(@Body(ValidationPipe) AuthCredentialsDto: AuthCredentialsDto): Promise<void> {
        return await this.authService.signUp(AuthCredentialsDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/auth/signin')
    async sighIn(@Request() req) {
        return this.authService.signIn(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getProfile(@Request() req) {
        const user: User = req.user;

        return omit(user, ['_id', 'username']);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/auth/check')
    checkAuth() {
        return 'ok';
    }

    // @UseGuards(JwtAuthGuard, RoleGuard)
    // @Role(ERole.student)
    // @Get('/getCat')
    // getCat() {
    //     return {
    //         cat: 'Голубой котенок',
    //     };
    // }
}
