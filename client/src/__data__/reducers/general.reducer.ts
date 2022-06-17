import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { EStatus, IGeneralState, ILesson } from '../models';

const initialState: IGeneralState = {
	data: null,
	isLoading: false,
	isError: false,
};

export const generalSlice = createSlice({
	name: 'general',
	initialState,
	reducers: {
		generalStatusFetch(state: Draft<IGeneralState>) {
			return { ...state, isLoading: true };
		},
		generalStatusFailure(state: Draft<IGeneralState>) {
			return { ...state, isLoading: false, isError: true };
		},
		generalStatusSuccess(state: Draft<IGeneralState>, action: PayloadAction<EStatus>) {
			return {
				...state,
				isLoading: false,
				data: {
					...state.data,
					status: action.payload,
				},
			};
		},
		generalGetLessonsFetch(state: Draft<IGeneralState>) {
			return { ...state, isLoading: true };
		},
		generalGetLessonsFailure(state: Draft<IGeneralState>) {
			return { ...state, isLoading: false, isError: true };
		},
		generalGetLessonsSuccess(state: Draft<IGeneralState>, action: PayloadAction<ILesson[]>) {
			return {
				...state,
				isLoading: false,
				data: {
					...state.data,
					lessons: action.payload,
				},
			};
		},
	},
});

export default generalSlice.reducer;
