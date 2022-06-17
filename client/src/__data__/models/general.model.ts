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
