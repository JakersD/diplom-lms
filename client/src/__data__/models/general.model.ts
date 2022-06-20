import { ILesson } from './user.model';

export enum ActionTypes {
	PICK_DATE = 'PICK_DATE',
}

export enum EStatus {
	pick = 'pick',
	sem = 'sem',
	lessons = 'lessons',
	schyedule = 'schedule',
	done = 'done',
}

export interface IGeneralData {
	status?: EStatus;
	lessons?: ILesson[];
}

export interface IGeneralState {
	data: IGeneralData | null;
	isLoading: boolean;
	isError: boolean;
}

export enum ERooms {
	A100 = 'A100',
	A101 = 'A101',
	A102 = 'A102',
	A103 = 'A103',
	A104 = 'A104',
	A105 = 'A105',
}
