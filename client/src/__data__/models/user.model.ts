export type TError = unknown;

export const storageName = 'userData';

export interface ISignInRequest {
	username: string;
	password: string;
}

export enum ERole {
	admin = 'admin',
	student = 'student',
	teacher = 'teacher',
}

export interface IUserData {
	role: ERole;
	facultyId: string;
}

export interface IUsersState {
	data?: IUserData | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: boolean;
	errorMsg: string;
}
