import { IA } from './form-collector.model';

export type TError = unknown;

export const storageName = 'userData';

export interface ISignInRequest {
	username: string;
	password: string;
}

export enum ERole {
	admin = 'admin',
	student = 'student',
	teacher = 'teacher',
}

export interface IPickDates {
	[x: number]: {
		dateStartPick: string;
		dateEndPick: string;
	};
}

export interface IPickSemDates {
	[x: number]: {
		dateStartSem: string;
		dateEndSem: string;
	};
}

export interface IGroup {
	_id: string;
	name: string;
	level: number;
	lessonsIds: ILesson[];
}

export interface ITeacher {
	_id: string;
	fio: string;
	description: string;
	position: string;
}

export interface ILesson {
	_id: string;
	name: string;
	description: string;
	schedule: any;
	teachersIds: Array<ITeacher>;
}

export interface IFaculty {
	shortName: string;
	pickDates: IPickDates;
	pickSemDates: IPickSemDates;
	groupIds: IGroup[];
}

export interface IUserData {
	role: ERole;
	facultyId: IFaculty;
	level: number;
	degree: string;
	fio: string;
	groupId: IGroup;
	lessonsIds: Array<string> | [];
	schedule: Array<IA>;
}

export interface IUsersState {
	data?: IUserData | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: boolean;
	errorMsg: string;
}
