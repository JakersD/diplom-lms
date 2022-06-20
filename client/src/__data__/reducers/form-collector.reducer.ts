import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { IFormNewLesson } from '../middlewares';
import { IA, IFormCollectorInitial, ILesson } from '../models';

const initialState: IFormCollectorInitial = {
	datePick: [],
	scheduler: {
		even: [],
		odd: [],
	},
	additionalLessons: [],
	userSchedule: [],
	successPicked: [],
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
		selectLesson(
			state: Draft<IFormCollectorInitial>,
			action: PayloadAction<{ lessonId: string; lessonName: string }>
		) {
			return {
				...state,
				scheduler: {
					...state.scheduler,
					select: action.payload,
				},
			};
		},
		selectTeacher(
			state: Draft<IFormCollectorInitial>,
			action: PayloadAction<{ teacherId: string; teacherName: string }>
		) {
			return {
				...state,
				scheduler: {
					...state.scheduler,
					select: {
						...state.scheduler?.select,
						teacherId: action.payload.teacherId,
						teacherName: action.payload.teacherName,
					},
				},
			};
		},
		resetSelect(state: Draft<IFormCollectorInitial>) {
			return {
				...state,
				scheduler: {
					...state.scheduler,
					select: undefined,
				},
			};
		},
		addNewLessonToSchedule(
			state: Draft<IFormCollectorInitial>,
			action: PayloadAction<{ isEven: string; form: IFormNewLesson }>
		) {
			return {
				...state,
				scheduler: {
					...state.scheduler,
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					[action.payload.isEven]: [...state.scheduler[action.payload.isEven], action.payload.form],
				},
			};
		},
		getAdditionalLessons(state: Draft<IFormCollectorInitial>, action: PayloadAction<Array<ILesson>>) {
			return {
				...state,
				additionalLessons: action.payload,
			};
		},
		addUserSchedule(state: Draft<IFormCollectorInitial>, action: PayloadAction<IA>) {
			return {
				...state,
				userSchedule: [...state.userSchedule, action.payload],
			};
		},
		addSuccessfulPicked(state: Draft<IFormCollectorInitial>, action: PayloadAction<boolean>) {
			return {
				...state,
				successPicked: [...state.successPicked, action.payload],
			};
		},
	},
});

export default formCollectorSlice.reducer;
