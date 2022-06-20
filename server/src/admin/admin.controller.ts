import { Body, Controller, Get, Put, Request, UseGuards } from '@nestjs/common';

import { Role } from 'src/users/decorators/role.decorator';
import { JwtAuthGuard } from 'src/users/guards/jwt-auth.guard';
import { RoleGuard } from 'src/users/guards/role.guard';
import { ERole } from 'src/users/interfaces/users.interface';
import { AdminService } from './admin.service';
import { LessonsBodyDto } from './dto/lessons-body.dto';
import { PickDatesDto } from './dto/pick-dates-dto';
import { PickSemDatesDto } from './dto/pick-sem-dates.dto';
import { ScheduleDto } from './dto/schedule.dto';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Role(ERole.admin)
    @Get('/status')
    async getStatus(@Request() req) {
        return await this.adminService.getStatus(req.user);
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Role(ERole.admin)
    @Put('/pickDates')
    async putPickDates(@Request() req, @Body() pickDatesDto: PickDatesDto) {
        return this.adminService.putPickDates(req.user, pickDatesDto);
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Role(ERole.admin)
    @Put('/pickSemDates')
    async putSemDates(@Request() req, @Body() PickSemDatesDto: PickSemDatesDto) {
        return this.adminService.putSemDates(req.user, PickSemDatesDto);
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Role(ERole.admin)
    @Get('/lessonsList')
    async getLessonsList(@Request() req) {
        return this.adminService.getLessonsList(req.user);
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Role(ERole.admin)
    @Put('/lessonsList')
    async updateLessonsList(@Body() lessonsBody: LessonsBodyDto) {
        return this.adminService.updateLessonsList(lessonsBody);
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Role(ERole.admin)
    @Put('/saveSchedule')
    async saveSchedule(@Request() req, @Body() scheduleDto: ScheduleDto) {
        return this.adminService.saveScheduleService(req.user, scheduleDto);
    }
}
