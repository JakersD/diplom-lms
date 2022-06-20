import React from 'react';
import { EDisciplineType, ERooms, IA } from '../../../../__data__/models';
import { generateKey } from '../../../../__data__/utils';
import Lesson from '../../admin/SetupSchedule/SetupScheduler/Lesson';

interface IPropSelect {
	lessonId?: string | undefined;
	teacherId?: string | undefined;
	teacherName?: string | undefined;
	lessonName?: string | undefined;
}

interface IPropData {
	name: string;
	schedule: Array<{
		lessonName: string;
		lessonId: string;
		teacher: string;
		teacherId: string;
		type: EDisciplineType;
		room: ERooms;
		day: number;
		time: number;
		parity: 'odd' | 'even';
	}>;
}

export const getUserLessonView = (
	day: number,
	time: number,
	select: IPropSelect | undefined,
	data: Array<IPropData> | undefined,
	userSchedule: Array<IA>,
	isEven: boolean
) => {
	const localParity = isEven ? 'even' : 'odd';

	if (userSchedule.some((v) => v.time === time && v.day === day && v.parity === localParity)) {
		return userSchedule.map((v, i) => (
			<>
				{v.time === time && v.day === day && v.parity === localParity && (
					<Lesson
						key={generateKey(String(i))}
						discipline={v.lessonName}
						room={v.room}
						teacher={v.teacher}
						type={v.type}
						selected
					/>
				)}
			</>
		));
	}

	return data?.map((v) =>
		v.schedule.map((d, i) => (
			<>
				{d.time === time &&
					d.day === day &&
					select?.lessonName === d.lessonName &&
					select.teacherName === d.teacher &&
					d.parity === localParity && (
						<Lesson
							key={generateKey(String(i))}
							discipline={d.lessonName}
							room={d.room}
							teacher={d.teacher}
							type={d.type}
						/>
					)}
			</>
		))
	);
};
