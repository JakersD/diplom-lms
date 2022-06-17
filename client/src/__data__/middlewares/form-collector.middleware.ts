import { formCollectorSlice } from '../reducers';
import { AppDispatch } from '../store';

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
