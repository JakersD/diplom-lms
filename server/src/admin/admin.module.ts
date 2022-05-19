import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
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
        ]),
    ],
    controllers: [AdminController],
    providers: [AdminService],
    exports: [AdminService],
})
export class AdminModule {}
