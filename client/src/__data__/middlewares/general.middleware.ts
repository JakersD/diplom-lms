import { EEndpoints } from '../models/endpoints.model';
import { generalSlice } from '../reducers';
import { AppDispatch, AppState } from '../store';
import { protectedGetFromServer, protectedPutToServer } from '../utils/endpoints.utils';

export const getStatus = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(generalSlice.actions.generalStatusFetch());

		const response = await protectedGetFromServer(EEndpoints.status);

		if (response) {
			dispatch(generalSlice.actions.generalStatusSuccess(response.data));
		}
	} catch (err) {
		dispatch(generalSlice.actions.generalStatusFailure());
		console.error('Произошла ошибка', err);
	}
};

export const sendPick = () => async (dispatch: AppDispatch, getState: AppState) => {
	try {
		const { datePick } = getState().formCollector;

		await protectedPutToServer(EEndpoints.pick, datePick);
	} catch (err) {
		console.error('Произошла ошибка', err);
	}
};

export const sendSem = () => async (dispatch: AppDispatch, getState: AppState) => {
	try {
		const { datePick } = getState().formCollector;

		await protectedPutToServer(EEndpoints.sem, datePick);
	} catch (err) {
		console.error('Произошла ошибка', err);
	}
};

export const getLessonsList = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(generalSlice.actions.generalGetLessonsFetch());

		const response = await protectedGetFromServer(EEndpoints.lessonsList);

		if (response?.status === 200) {
			dispatch(generalSlice.actions.generalGetLessonsSuccess(response.data));
		}
	} catch (err) {
		dispatch(generalSlice.actions.generalGetLessonsFailure());
		console.error('Произошла ошибка', err);
	}
};

export const sendLessonsList =
	(groupName: string, pickedDisciplines: Array<string>) => async (dispatch: AppDispatch) => {
		try {
			const bodyToPut = { groupName, pickedDisciplines };

			await protectedPutToServer(EEndpoints.lessonsList, bodyToPut);
		} catch (err) {
			dispatch(generalSlice.actions.generalGetLessonsFailure());
			console.error('Произошла ошибка', err);
		}
	};
