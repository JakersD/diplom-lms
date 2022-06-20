import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, MainPage, ProfilePage } from '../../pages';
import { DisciplinesChoice, SetupSchedule } from '../../pages/main/admin';
import { checkLogin, getProfile } from '../middlewares/user.middleware';
import { ERole } from '../models';
import { useTypedSelector } from './useRedux';

export const useRoutes = () => {
	const isAuth = useTypedSelector((state) => state.user.isAuthenticated);
	const role = useTypedSelector((state) => state.user.data?.role);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(checkLogin());
			await dispatch(getProfile());
		};

		fetchData();
	}, []);

	if (isAuth) {
		if (role === ERole.admin) {
			return (
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/disciplines' element={<DisciplinesChoice />} />
					<Route path='/schedule' element={<SetupSchedule />} />
					<Route path='*' element={<Navigate to={'/'} />} />
				</Routes>
			);
		}
		return (
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/profile' element={<ProfilePage />} />
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
