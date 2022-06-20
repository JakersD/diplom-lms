import React from 'react';

import { EDisciplineType, ERooms } from '../../../../../__data__/models';
import Lesson from './Lesson';

interface IPropSelect {
	lessonId?: string | undefined;
	teacherId?: string | undefined;
	teacherName?: string | undefined;
	lessonName?: string | undefined;
}

interface IPropData {
	lessonName: string;
	lessonId: string;
	teacher: string;
	type: EDisciplineType;
	day: number;
	room: ERooms;
	time: number;
}

export const getLessonView = (
	time: number,
	day: number,
	select: IPropSelect | undefined,
	data: Array<IPropData> | undefined
) => {
	return data?.map((v) => (
		<>
			{v.time === time &&
				v.day === day &&
				select?.lessonName === v.lessonName &&
				select.teacherName === v.teacher && (
					<Lesson discipline={v.lessonName} room={v.room} teacher={v.teacher} type={v.type} />
				)}
		</>
	));
};
