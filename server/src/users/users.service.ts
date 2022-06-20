import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ERole, User } from './interfaces/users.interface';
import { getUser } from 'src/admin/utils/admin.utils';
import { Groups, Lessons } from 'src/admin/interfaces/models.interface';
import { difference, union, without } from 'lodash';
import { AdditionalLessonsDto } from './dto/additional-lessons.dto';
import mongoose from 'mongoose';
import { SendUserScheduleDTO } from './dto/send-user-schedule.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users') private userModel: Model<User>,
        @InjectModel('Groups') private groupsModel: Model<Groups>,
        @InjectModel('Lessons') private lessonsModel: Model<Lessons>,
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
            .populate({
                path: 'facultyId',
                model: 'Faculty',
                select: {
                    id: 0,
                    __v: 0,
                    groupsIds: 0,
                },
            })
            .populate({
                path: 'groupId',
                model: 'Groups',
                populate: {
                    path: 'lessonsIds',
                    model: 'Lessons',
                },
            });
    }

    async getAdditionalLessons(userCred: User) {
        const userData = await getUser(userCred, this.userModel);
        // @ts-ignore
        const groupId = userData.groupId;

        const mainLessons = await this.groupsModel.findOne({ _id: groupId }, { lessonsIds: 1 });
        const allLessons = await this.lessonsModel.find({}, { _id: 1 });

        const newAllLessons = [];
        for (let i = 0; i < allLessons.length; i++) {
            newAllLessons.push(allLessons[i]._id);
        }

        const a = newAllLessons
            .map((v, i) => (String(v) !== String(mainLessons.lessonsIds[i]) ? v : ''))
            .filter((v) => v);

        const b = await this.lessonsModel.find({ _id: a });

        return b;
    }

    async putAdditionalLessons(userCred: User, additionalLessonsDto: AdditionalLessonsDto) {
        const userData = await getUser(userCred, this.userModel);

        await this.userModel.updateOne({ _id: userData._id }, { lessonsIds: additionalLessonsDto });
        return 'ОК';
    }

    async getUserLessonsList(userCred: User) {
        const userData = await getUser(userCred, this.userModel);
        // @ts-ignore
        const groupId = userData.groupId;

        const mainLessons = await this.groupsModel.findOne({ _id: groupId }, { lessonsIds: 1 });
        const additionalLessons = await this.userModel.findOne(
            { _id: userData._id },
            { lessonsIds: 1 },
        );

        // @ts-ignore
        const concatedLessonList = mainLessons.lessonsIds.concat(additionalLessons.lessonsIds);

        const b = await this.lessonsModel
            .find({ _id: concatedLessonList })
            .populate({ path: 'teachersIds', module: 'Teachers' });

        return b;
    }

    async sendUserSchedule(userCred: User, userSchedule: SendUserScheduleDTO) {
        const userData = await getUser(userCred, this.userModel);

        await this.userModel.updateOne({ _id: userData._id }, { schedule: userSchedule });
        return 'Ок';
    }
}
