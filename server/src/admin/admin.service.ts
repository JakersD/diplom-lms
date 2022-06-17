import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { get, isEmpty } from 'lodash';
import mongoose from 'mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/interfaces/users.interface';
import { LessonsBodyDto } from './dto/lessons-body.dto';
import { PickDatesDto } from './dto/pick-dates-dto';
import { PickSemDatesDto } from './dto/pick-sem-dates.dto';
import { Faculty, Groups, Lessons } from './interfaces/models.interface';
import { EStatus } from './interfaces/status.interface';
import { getUser } from './utils/admin.utils';
import { ObjectId } from 'mongodb';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel('Faculty') private facultyModel: Model<Faculty>,
        @InjectModel('Users') private userModel: Model<User>,
        @InjectModel('Groups') private groupsModel: Model<Groups>,
        @InjectModel('Lessons') private lessonsModel: Model<Lessons>,
    ) {}

    async getStatus(userCred: User) {
        const userData = await getUser(userCred, this.userModel);

        const faculty = userData.facultyId;

        // Если dateStartPick не задан - статус выбора предметов
        if (isEmpty(get(faculty, 'pickDates.1.dateStartPick'))) {
            return EStatus.pick;
        }

        // Если dateStartSem не задан - статус выбора семeстра
        if (isEmpty(get(faculty, 'pickSemDates.1.dateStartSem'))) {
            return EStatus.sem;
        }

        const groups = await this.groupsModel
            .find()
            .populate({ path: 'lessonsIds', module: 'Lessons' });

        // Если не заданы предметы - статус выбора предметов
        const isLessons = groups.some((v) => isEmpty(v.lessonsIds));
        if (isLessons) {
            return EStatus.lessons;
        }

        // Если не задано расписание предметов - статус выбора расписания для предметов
        // const isSchedule = groups.some((group) => {
        //     if (isEmpty(group.lessonsIds)) {
        //         return true;
        //     }
        //     group.lessonsIds.some((lesson) => {
        //         if (isEmpty(lesson.schedule)) {
        //             return true;
        //         }
        //         lesson.schedule.some((sched) => isEmpty(sched));
        //     });
        // });
        // if (isSchedule) {
        //     return EStatus.schyedule;
        // }

        return EStatus.done;
    }

    async putPickDates(userCred: User, pickDatesDto: PickDatesDto) {
        const userData = await getUser(userCred, this.userModel);
        const faculty = userData.facultyId;

        return await this.facultyModel.updateOne(
            { shortName: faculty.shortName },
            { pickDates: pickDatesDto },
        );
    }

    async putSemDates(userCred: User, pickSemDatesDto: PickSemDatesDto) {
        const userData = await getUser(userCred, this.userModel);
        const faculty = userData.facultyId;

        return await this.facultyModel.updateOne(
            { shortName: faculty.shortName },
            { pickSemDates: pickSemDatesDto },
        );
    }

    async getLessonsList(userCred: User) {
        const userData = await getUser(userCred, this.userModel);
        const faculty = userData.facultyId;

        return await this.lessonsModel.find({ facultyid: faculty._id }).populate({
            path: 'teachersIds',
            module: 'Users',
            select: {
                __v: 0,
                username: 0,
                password: 0,
                lessonsIds: 0,
                facultyId: 0,
                role: 0,
            },
        });
    }

    async updateLessonsList(LessonsBodyDto: LessonsBodyDto) {
        const { groupName, pickedDisciplines } = LessonsBodyDto;

        const objectIds = pickedDisciplines.map(
            (discipline) => new mongoose.Types.ObjectId(discipline),
        );

        return await this.groupsModel.updateOne({ name: groupName }, { lessonsIds: objectIds });
    }
}
