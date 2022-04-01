export type TError = unknown;

export interface ISignInRequest {
	username: string;
	password: string;
}

export interface IUserData {
	username: string;
}

export interface IUsersState {
	data: IUserData | null;
	isLoading: boolean;
	error: boolean;
	errorMsg: string;
}
