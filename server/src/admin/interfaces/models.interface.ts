import { Document, Types } from 'mongoose';

interface IYear {
    dateStartSem: Date;
    dateEndSem: Date;
    dateStartPick: Date;
    dateEndPick: Date;
}

export interface Faculty extends Document {
    readonly name: string;
    readonly shortName: string;
    readonly semester: number;
    readonly year: Array<IYear>;
}

export interface Groups extends Document {
    readonly name: string;
    readonly level: number;
    readonly lessonsIds: Array<Lessons>;
    readonly usersIds: Array<Types.ObjectId>;
    readonly facultyId: Faculty | Types.ObjectId;
}

interface ISchedule {
    odd: boolean;
    day: number;
    room: number;
}

export interface Lessons extends Document {
    readonly name: string;
    readonly description: string;
    readonly schedule: Array<ISchedule>;
}
