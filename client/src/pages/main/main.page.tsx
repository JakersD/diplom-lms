import React, { useEffect } from 'react';
import ClassesNotStarted from './student/ClassesNotStarted/ClassesNotStarted';
import { MainTitle, Navbar } from '../../components';
import PickSem from './admin/PickDates/PickDates';
import { ERole } from '../../__data__/models';
import { useTypedSelector } from '../../__data__/hooks';
import { renderStatusPage } from './utils';
import { useDispatch } from 'react-redux';
import { getStatus } from '../../__data__/middlewares';

// interface IProps

export const MainPage: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();

	const role = useTypedSelector((state) => state.user.data?.role);
	const status = useTypedSelector((state) => state.general.data?.status);

	useEffect(() => {
		dispatch(getStatus());
	}, []);

	if (role === ERole.admin) {
		return (
			<>
				<Navbar isDate />
				<MainTitle title='15.05.2022 направление ИТ, 4 курс, 2 семестр' />
				{status && <>{renderStatusPage(status)}</>}
			</>
		);
	}

	return (
		<>
			<Navbar isDate />
			<MainTitle title='15.05.2022 направление ИТ, 4 курс, 2 семестр' />
			{/* <ClassesNotStarted /> */}
			{/* <PickSem /> */}
		</>
	);
};

export default MainPage;
