import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Role } from 'src/users/decorators/role.decorator';
import { JwtAuthGuard } from 'src/users/guards/jwt-auth.guard';
import { RoleGuard } from 'src/users/guards/role.guard';
import { ERole } from 'src/users/interfaces/users.interface';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Role(ERole.admin)
    @Post('/status')
    async getStatus(@Body() { facultyShortName }) {
        return await this.adminService.getStatus(facultyShortName);
    }
}
