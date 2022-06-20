import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
    role: String,
    fio: String,
    description: String,
    level: Number,
    position: String,
    degree: String,
    schedule: [{ type: mongoose.Schema.Types.Mixed }],
    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty',
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Groups',
    },
    lessonsIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lessons',
        },
    ],
});
