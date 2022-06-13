import { Body, Controller, Get, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

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
    async getProfile(@Request() req) {
        return await this.authService.getProfile(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/auth/check')
    checkAuth() {
        return 'ok';
    }
}
