import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IUsersState, IUserData } from '../models/user.model';

const initialState: IUsersState = {
	data: null,
	isLoading: false,
	error: false,
	errorMsg: '',
	isAuthenticated: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		userLogin(state: Draft<IUsersState>) {
			return { ...state, isLoading: true };
		},
		userLoginFailure(state: Draft<IUsersState>, action: PayloadAction<string>) {
			return { ...state, isLoading: false, error: true, errorMsg: action.payload };
		},
		userLoginSuccess(state: Draft<IUsersState>) {
			return { ...state, isLoading: false, isAuthenticated: true };
		},
		userLoginClearError(state: Draft<IUsersState>) {
			return { ...state, errorMsg: '', error: false };
		},
		userLogout(state: Draft<IUsersState>) {
			return { ...state, isAuthenticated: false };
		},
		userGetProfile(state: Draft<IUsersState>, action: PayloadAction<IUserData>) {
			return { ...state, data: action.payload };
		},
	},
});

export default userSlice.reducer;
