import { EDisciplineType, ERooms, IA } from '../models';
import { EEndpoints } from '../models/endpoints.model';
import { formCollectorSlice } from '../reducers';
import { AppDispatch } from '../store';
import { protectedGetFromServer } from '../utils/endpoints.utils';

export const changeStartPick =
	(level: number, date: Date) =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.changeStartPick({ level, date }));
		} catch (err) {
			console.warn(err);
		}
	};

export const changeEndPick =
	(level: number, date: Date) =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.changeEndPick({ level, date }));
		} catch (err) {
			console.warn(err);
		}
	};

export const changeStartSem =
	(level: number, date: Date) =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.changeStartSem({ level, date }));
		} catch (err) {
			console.warn(err);
		}
	};

export const changeEndSem =
	(level: number, date: Date) =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.changeEndSem({ level, date }));
		} catch (err) {
			console.warn(err);
		}
	};

export const resetPickDates =
	() =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.resetPick());
		} catch (err) {
			console.warn(err);
		}
	};

export const selectLesson =
	(lessonId: string, lessonName: string) =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.selectLesson({ lessonId, lessonName }));
		} catch (err) {
			console.warn(err);
		}
	};
export const selectTeacher =
	(teacherId: string, teacherName: string) =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.selectTeacher({ teacherId, teacherName }));
		} catch (err) {
			console.warn(err);
		}
	};
export const resetSelect =
	() =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.resetSelect());
		} catch (err) {
			console.warn(err);
		}
	};

export interface IFormNewLesson {
	lessonName: string;
	lessonId: string;
	teacher: string;
	teacherId: string;
	type: EDisciplineType | null;
	room: ERooms | null;
	day: number | null;
	time: number | null;
}

export const addNewLesson =
	(isEven: boolean, form: IFormNewLesson) =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.addNewLessonToSchedule({ isEven: isEven ? 'even' : 'odd', form }));
		} catch (err) {
			console.warn(err);
		}
	};

export const getAdditionalLessons =
	() =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			const response = await protectedGetFromServer(EEndpoints.additionalLessons);

			if (response) {
				dispatch(formCollectorSlice.actions.getAdditionalLessons(response.data));
			}
		} catch (err) {
			console.warn(err);
		}
	};
export const setUserLessonsList =
	() =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			const response = await protectedGetFromServer(EEndpoints.userLessonsList);

			if (response) {
				dispatch(formCollectorSlice.actions.getAdditionalLessons(response.data));
			}
		} catch (err) {
			console.warn(err);
		}
	};

export const addUserSchedule =
	(userSchedule: IA) =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.addUserSchedule(userSchedule));
		} catch (err) {
			console.warn(err);
		}
	};

export const addSuccessfulPicked =
	() =>
	async (dispatch: AppDispatch): Promise<void> => {
		try {
			dispatch(formCollectorSlice.actions.addSuccessfulPicked(true));
		} catch (err) {
			console.warn(err);
		}
	};
