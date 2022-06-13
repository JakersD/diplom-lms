import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isEmpty } from 'lodash';
import { Model } from 'mongoose';
import { Faculty, Groups, Lessons } from './interfaces/models.interface';
import { EStatus } from './interfaces/status.interface';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel('Faculty') private facultyModel: Model<Faculty>,
        @InjectModel('Groups') private groupsModel: Model<Groups>,
        @InjectModel('Lessons') private lessonsModel: Model<Lessons>,
    ) {}

    async getStatus(name: string) {
        const faculty = await this.facultyModel.findOne({ shortName: name });

        // Если dateStartPick не задан - статус выбора предметов
        if (isEmpty(faculty.year[0]?.dateStartPick)) {
            return EStatus.pick;
        }

        // Если dateStartSem не задан - статус выбора семeстра
        if (isEmpty(faculty.year[0]?.dateStartSem)) {
            return EStatus.sem;
        }

        const groups = await this.groupsModel
            .find()
            .populate({ path: 'lessonsIds', module: 'Lessons' });

        // Если не заданы предметы - статус задавания предметов
        const isLessons = groups.some((v) => isEmpty(v.lessonsIds));
        if (isLessons) {
            return EStatus.lessons;
        }

        // Если не задано расписание предметов - статус задавания расписания для предметов
        const isSchedule = groups.some((group) => {
            if (isEmpty(group.lessonsIds)) {
                return true;
            }
            group.lessonsIds.some((lesson) => {
                if (isEmpty(lesson.schedule)) {
                    return true;
                }
                lesson.schedule.some((sched) => isEmpty(sched));
            });
        });
        if (isSchedule) {
            return EStatus.schyedule;
        }

        return EStatus.done;
    }
}
