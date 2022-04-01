import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IUsersState, IUserData } from '../models/user.model';

const initialState: IUsersState = {
	data: null,
	isLoading: false,
	error: false,
	errorMsg: '',
};

export const usersSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		userLogin(state: Draft<IUsersState>) {
			return { ...state, isLoading: true };
		},
		userLoginFailure(state: Draft<IUsersState>, action: PayloadAction<string>) {
			return { ...state, isLoading: false, error: true, errorMsg: action.payload };
		},
		userLoginSuccess(state: Draft<IUsersState>, action: PayloadAction<IUserData>) {
			return { ...state, isLoading: false, data: action.payload };
		},
		userLoginClearError(state: Draft<IUsersState>) {
			return { ...state, errorMsg: '', error: false };
		},
	},
});

export default usersSlice.reducer;
