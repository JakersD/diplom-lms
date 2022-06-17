import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from 'src/users/schemas/users.schema';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { FacultySchema, GroupSchema, LessonsSchema } from './schemas/admin.schemas';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Groups', schema: GroupSchema },
            {
                name: 'Faculty',
                schema: FacultySchema,
            },
            {
                name: 'Lessons',
                schema: LessonsSchema,
            },
            {
                name: 'Users',
                schema: UsersSchema,
            },
        ]),
    ],
    controllers: [AdminController],
    providers: [AdminService],
    exports: [AdminService],
})
export class AdminModule {}
