import { Document } from 'mongoose';

export interface User extends Document {
    readonly username: string;
    readonly password: string;
    readonly role: ERole;
}

export enum ERole {
    student = 'student',
    admin = 'admin',
    teacher = 'teacher',
}
