import { Injectable, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

import { User, UserDocument } from './schemas/user.shema';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async getAll() {
        return this.userModel.find().exec();
    }

    async signUp(authCredDto: AuthCredentialsDto): Promise<void> {
        try {
            const { username, password } = authCredDto;

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new this.userModel({ username, password: hashedPassword });

            console.log(user);

            await user.save();
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Пользователь уже существует');
            }
            throw error;
        }
    }
}
