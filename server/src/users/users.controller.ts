import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getAll() {
        return this.usersService.getAll();
    }

    @Post('/signup')
    async signUp(@Body() authCredDto: AuthCredentialsDto): Promise<void> {
        return await this.usersService.signUp(authCredDto);
    }
}
