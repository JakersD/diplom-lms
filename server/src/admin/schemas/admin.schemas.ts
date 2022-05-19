import * as mongoose from 'mongoose';

export const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: 'true',
    },
    dateStartSem: Date,
    dateEndSem: Date,
    dateStartPick: Date,
    dateEndPick: Date,
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
        unique: true,
    },
    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty',
    },
    studentsIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
        },
    ],
});

export const LessonsSchema = new mongoose.Schema({
    name: String,
    description: String,
    teachersIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
        },
    ],
    schedule: [{ type: mongoose.Schema.Types.Mixed }],
});
