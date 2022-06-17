import { Document } from 'mongoose';

export interface User extends Document {
    readonly username: string;
    readonly password: string;
    readonly facultyId: any;
    readonly role: ERole;
    readonly fio: string;
    readonly level: number;
    readonly semester: number;
}

export enum ERole {
    student = 'student',
    admin = 'admin',
    teacher = 'teacher',
}
