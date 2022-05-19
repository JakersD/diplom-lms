import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/users/guards/jwt-auth.guard';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/jopka')
    getJopka() {
        return 'Жопа';
    }
}
