import React from 'react';

import ClassesNotStarted from './student/ClassesNotStarted/ClassesNotStarted';
import { MainTitle, Navbar } from '../../components';
import PickSem from './admin/PickSem';

export const MainPage: React.FC = () => {
	return (
		<>
			<Navbar isDate />
			<MainTitle title='15.05.2022 направление ИТ, 4 курс, 2 семестр' />
			{/* <ClassesNotStarted /> */}
			<PickSem />
		</>
	);
};

export default MainPage;
