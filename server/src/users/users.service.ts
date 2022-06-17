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
        const { password } = AuthCredentialsDto;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new this.userModel({ ...AuthCredentialsDto, password: hashedPassword });

        console.log(user);

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
        const payload = { username: user.username, role: user.role };

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

    async getProfile(userCred: User) {
        const { username, role } = userCred;

        if (role === ERole.admin) {
            return await this.userModel
                .findOne({ username }, { _id: 0, __v: 0, username: 0, password: 0 })
                .populate({
                    path: 'facultyId',
                    model: 'Faculty',
                    populate: {
                        path: 'groupIds',
                        model: 'Groups',
                    },
                });
        }

        return await this.userModel
            .findOne({ username }, { _id: 0, __v: 0, username: 0, password: 0 })
            .populate(
                {
                    path: 'facultyId',
                    model: 'Faculty',
                },
                { id: 0, __v: 0, groupsIds: 0 },
            );
    }
}
