import React from 'react';
import { Typography } from '@mui/material';

import ClassesNotStarted from './ClassesNotStarted/ClassesNotStarted';
import { MainTitle, Navbar } from '../../components';

export const MainPage: React.FC = () => {
	return (
		<>
			<Navbar isDate />
			<MainTitle title='15.05.2022 направление ИТ, 4 курс, 2 семестр' />
			<ClassesNotStarted />
		</>
	);
};

export default MainPage;
