import React from 'react';
import { MainTitle, Navbar } from '../../components';
import { ERole } from '../../__data__/models';
import { useTypedSelector } from '../../__data__/hooks';
import StatusComponent from './admin/StatusComponent';
import StudentStatusComponent from './student/StatusComponent';

// interface IProps

export const MainPage: React.FC = (): JSX.Element => {
	const role = useTypedSelector((state) => state.user.data?.role);

	if (role === ERole.admin) {
		return (
			<>
				<Navbar isDate />
				<MainTitle title='15.05.2022 направление ИТ, 4 курс, 2 семестр' />
				<StatusComponent />
			</>
		);
	}

	if (role === ERole.student) {
		return (
			<>
				<Navbar isDate />
				<MainTitle />
				<StudentStatusComponent />
			</>
		);
	}

	return (
		<>
			<Navbar isDate />
			<MainTitle />
		</>
	);
};

export default MainPage;
