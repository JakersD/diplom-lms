import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Main } from '../../pages';

export const useRoutes = (isAuth: boolean) => {
	if (isAuth) {
		return (
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='*' element={<Navigate to={'/'} />} />
			</Routes>
		);
	}
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='*' element={<Navigate to={'/login'} />} />
		</Routes>
	);
};
