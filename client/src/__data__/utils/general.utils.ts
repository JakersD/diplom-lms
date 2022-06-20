import { EDisciplineType, ERooms } from '../models';

export const generateKey = (pre: string): string => {
	return `${pre}_${new Date().getTime()}`;
};

export const getSemester = (): string => (new Date().getMonth() + 1 >= 5 ? '1' : '2');

export const getLessonType = (type: EDisciplineType): string => {
	switch (type) {
		case EDisciplineType.lecture:
			return 'Лекция';
		case EDisciplineType.practice:
			return 'Практика';
		case EDisciplineType.seminar:
			return 'Семинар';
		default:
			return '';
	}
};

export const getRoomType = (type: ERooms): string => {
	switch (type) {
		case ERooms.A100:
			return 'Ауд. А-100';
		case ERooms.A101:
			return 'Ауд. А-101';
		case ERooms.A102:
			return 'Ауд. А-102';
		case ERooms.A103:
			return 'Ауд. А-103';
		case ERooms.A104:
			return 'Ауд. А-104';
		case ERooms.A105:
			return 'Ауд. А-105';
		default:
			return '';
	}
};

export const getWeek = (isEven: boolean): string => (isEven ? 'even' : 'odd');
