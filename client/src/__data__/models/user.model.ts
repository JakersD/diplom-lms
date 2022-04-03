export type TError = unknown;

export const storageName = 'userData';

export interface ISignInRequest {
	username: string;
	password: string;
}

export interface IUserData {
	token: string;
	isAuthenticated: boolean;
}

export interface IUsersState {
	data?: IUserData | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: boolean;
	errorMsg: string;
}
