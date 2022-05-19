import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ERole, User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users') private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    async signUp(AuthCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password, role } = AuthCredentialsDto;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new this.userModel({ username, password: hashedPassword, role });

        try {
            await user.save();
        } catch (error: any) {
            if (error.code === 11000) {
                throw new ConflictException('Такой пользователь уже существует');
            }
            throw error;
        }
    }

    async signIn(user: User) {
        const payload = { sub: user._id, username: user.username, role: user.role };

        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async validateUser(username: string, pass: string) {
        const user = await this.userModel.findOne({ username });

        if (!user) {
            return null;
        }

        const valid = await bcrypt.compare(pass, user.password);

        if (valid) {
            return user;
        }

        return null;
    }
}
