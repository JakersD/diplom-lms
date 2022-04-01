import { ISignInRequest } from '../models';
import { EEndpoints } from '../models/endpoints.model';
import { usersSlice } from '../reducers';
import { AppDispatch } from '../store';
import { postToServer } from '../utils/endpoints.utils';

export const fetchUser = (data: ISignInRequest) => async (dispatch: AppDispatch) => {
	try {
		dispatch(usersSlice.actions.userLogin());

		const response = await postToServer(EEndpoints.signIn, data);

		console.log('Я тут', response);
	} catch (error: any) {
		dispatch(usersSlice.actions.userLoginFailure(error.message || 'Ошибка входа, пожалуйста попробуйте снова'));
		dispatch(usersSlice.actions.userLoginClearError());
		console.warn('Произошла ошибка', error);
	}
};
