import { Body, Controller, Get, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';

import { AuthService } from './auth.service';
import { Role } from './decorators/role.decorator';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RoleGuard } from './guards/role.guard';
import { ERole } from './interfaces/user.interface';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    async signUp(@Body(ValidationPipe) AuthCredentialsDto: AuthCredentialsDto): Promise<void> {
        return await this.authService.signUp(AuthCredentialsDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/signin')
    async sighIn(@Request() req) {
        return this.authService.signIn(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Role(ERole.student)
    @Get('/getCat')
    getCat() {
        return {
            cat: 'Голубой котенок',
        };
    }
}
