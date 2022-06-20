import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    Request,
    UseGuards,
    ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AdditionalLessonsDto } from './dto/additional-lessons.dto';
import { SendUserScheduleDTO } from './dto/send-user-schedule.dto';

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

    @UseGuards(JwtAuthGuard)
    @Get('/additionalLessons')
    async getAdditionalLessons(@Request() req) {
        return await this.authService.getAdditionalLessons(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/additionalLessons')
    async putAdditionalLessons(@Request() req, @Body() additionalLessonsDto: AdditionalLessonsDto) {
        return await this.authService.putAdditionalLessons(req.user, additionalLessonsDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/lessonsList')
    async getUserLessonsList(@Request() req) {
        return await this.authService.getUserLessonsList(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/sendSchedule')
    async sendUserSchedule(@Request() req, @Body() sendUserScheduleDTO: SendUserScheduleDTO) {
        return await this.authService.sendUserSchedule(req.user, sendUserScheduleDTO);
    }
}
