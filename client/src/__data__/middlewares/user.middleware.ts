import { ISignInRequest, IUserData, storageName } from '../models';
import { EEndpoints } from '../models/endpoints.model';
import { userSlice } from '../reducers';
import { AppDispatch } from '../store';
import { getAuthToken } from '../utils';
import { postToServer, protectedGetFromServer } from '../utils/endpoints.utils';

export const loginUser = (data: ISignInRequest) => async (dispatch: AppDispatch) => {
	try {
		dispatch(userSlice.actions.userLogin());

		const response = await postToServer(EEndpoints.signIn, data);

		const { accessToken } = response.data;

		if (accessToken) {
			localStorage.setItem(
				storageName,
				JSON.stringify({
					token: accessToken,
				})
			);
			return dispatch(userSlice.actions.userLoginSuccess());
		}

		throw { message: 'Что-то пошло не так, пожалуйста попробуйте снова' };
	} catch (error: any) {
		dispatch(userSlice.actions.userLoginFailure(error.message || 'Ошибка входа, пожалуйста попробуйте снова'));
		dispatch(userSlice.actions.userLoginClearError());
		console.warn('Произошла ошибка', error);
	}
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
	localStorage.removeItem(storageName);
	dispatch(userSlice.actions.userLogout());
};

export const checkLogin = () => async (dispatch: AppDispatch) => {
	const token = getAuthToken();

	if (token) {
		dispatch(userSlice.actions.userLoginSuccess());
	}
};

export const getProfile = () => async (dispatch: AppDispatch) => {
	const token = getAuthToken();

	if (token) {
		const response = await protectedGetFromServer(EEndpoints.profile, token);

		const { data: profile }: { data: IUserData } = response;

		dispatch(userSlice.actions.userGetProfile(profile));
	}
};
