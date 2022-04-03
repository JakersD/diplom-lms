import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, MainPage } from '../../pages';
import { checkLogin } from '../middlewares/user.middleware';
import { useTypedSelector } from './useRedux';

export const useRoutes = () => {
	const isAuth = useTypedSelector((state) => state.user.isAuthenticated);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkLogin());
	}, []);

	if (isAuth) {
		return (
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='*' element={<Navigate to={'/'} />} />
			</Routes>
		);
	}
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='*' element={<Navigate to={'/login'} />} />
		</Routes>
	);
};
