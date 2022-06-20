import { ERooms } from './general.model';
import { ILesson } from './user.model';

export interface IDatePick {
	level?: {
		dateStartPick?: Date;
		dateEndPick?: Date;
		dateStartSem?: Date;
		dateEndSem?: Date;
	};
}

export enum EDisciplineType {
	lecture = 'lecture',
	practice = 'practice',
	seminar = 'seminar',
}

export interface IA {
	lessonName: string;
	lessonId: string;
	teacher: string;
	teacherId: string;
	type: EDisciplineType;
	day: number;
	time: number;
	room: ERooms;
	parity?: string;
}

export interface ISchedule {
	even: Array<IA> | [];
	odd: Array<IA> | [];
	select?: {
		lessonId?: string;
		lessonName?: string;
		teacherId?: string;
		teacherName?: string;
	};
}

export interface IFormCollectorInitial {
	datePick: Array<IDatePick> | [];
	scheduler: ISchedule;
	additionalLessons: Array<ILesson> | [];
	userSchedule: Array<IA> | [];
	successPicked: Array<boolean> | [];
}
