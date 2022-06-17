import * as mongoose from 'mongoose';

export const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: 'true',
    },
    shortName: {
        type: String,
        unique: 'true',
    },
    pickDates: {
        type: mongoose.Schema.Types.Mixed,
    },
    pickSemDates: {
        type: mongoose.Schema.Types.Mixed,
    },
    groupIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Groups',
        },
    ],
});

export const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    level: {
        type: Number,
    },
    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty',
    },
    usersIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
        },
    ],
    lessonsIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lessons',
        },
    ],
});

export const LessonsSchema = new mongoose.Schema({
    name: String,
    description: String,
    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty',
    },
    teachersIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
        },
    ],
    schedule: [{ type: mongoose.Schema.Types.Mixed }],
});
