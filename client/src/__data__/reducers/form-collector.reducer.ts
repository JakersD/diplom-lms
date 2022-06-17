import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { IFormCollectorInitial } from '../models';

const initialState: IFormCollectorInitial = {
	datePick: [],
};

export const formCollectorSlice = createSlice({
	name: 'formCollector',
	initialState,
	reducers: {
		changeStartPick(state: Draft<IFormCollectorInitial>, action: PayloadAction<{ level: number; date: Date }>) {
			return {
				...state,
				datePick: {
					...state.datePick,
					[action.payload.level]: {
						...state.datePick[action.payload.level],
						dateStartPick: action.payload.date,
					},
				},
			};
		},
		changeEndPick(state: Draft<IFormCollectorInitial>, action: PayloadAction<{ level: number; date: Date }>) {
			return {
				...state,
				datePick: {
					...state.datePick,
					[action.payload.level]: {
						...state.datePick[action.payload.level],
						dateEndPick: action.payload.date,
					},
				},
			};
		},
		resetPick(state: Draft<IFormCollectorInitial>) {
			return {
				...state,
				datePick: [],
			};
		},
		changeStartSem(state: Draft<IFormCollectorInitial>, action: PayloadAction<{ level: number; date: Date }>) {
			return {
				...state,
				datePick: {
					...state.datePick,
					[action.payload.level]: {
						...state.datePick[action.payload.level],
						dateStartSem: action.payload.date,
					},
				},
			};
		},
		changeEndSem(state: Draft<IFormCollectorInitial>, action: PayloadAction<{ level: number; date: Date }>) {
			return {
				...state,
				datePick: {
					...state.datePick,
					[action.payload.level]: {
						...state.datePick[action.payload.level],
						dateEndSem: action.payload.date,
					},
				},
			};
		},
	},
});

export default formCollectorSlice.reducer;
