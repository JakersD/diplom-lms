import React, { useEffect, useState } from 'react';

import {
	Container,
	MainTitle,
	Navbar,
	TableStyledCell,
	// Table,
	// TableBody,
	// TableBodyCell,
	// TableBodyRow,
	// TableHeader,
	// TableHeaderCell,
	UserInfo,
} from '../../components';
import { SCalendarContainer, SContainer, SLessonsTitle, SLink, SWrapper } from './Profile.style';
import { mainPerson } from '../../icons';
import { TDetail } from '../../__data__/models';
import { Box, CircularProgress, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLessonsList } from '../../__data__/middlewares';
import { useTypedSelector } from '../../__data__/hooks';
import { generateKey } from '../../__data__/utils';
import { isEmpty } from 'lodash';
import { getUserData } from './utils';

const ProfilePage: React.FC = (): JSX.Element => {
	const [date, setDate] = useState<Date | null>(new Date());

	const lessons = useTypedSelector((state) => state.formCollector.additionalLessons);
	const user = useTypedSelector((state) => state.user.data);
	const facultyName = useTypedSelector((state) => state.user.data?.facultyId.name);
	const groupName = useTypedSelector((state) => state.user.data?.groupId.name);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setUserLessonsList());
	}, []);

	return (
		<>
			<Navbar isProfile />
			<MainTitle title='15.05.2022 направление ИТ, 4 курс, 2 семестр' />
			<SWrapper>
				<SContainer>
					<Container width='363px' margin='0 32px 0 0' isFullHeight>
						<UserInfo
							name={user?.fio || ''}
							icon={mainPerson}
							details={getUserData(user?.degree || '', facultyName || '', groupName || '')}
						/>
					</Container>
					<Container width='652px' margin='0 32px 0 0'>
						<SLessonsTitle>Дисциплины</SLessonsTitle>
						{isEmpty(lessons) ? (
							<Box sx={{ display: 'flex', justifyContent: 'center' }}>
								<CircularProgress />
							</Box>
						) : (
							<Table sx={{ minWidth: 650 }} aria-label='simple table'>
								<TableBody>
									{lessons?.map((lesson, i) => (
										<TableRow key={generateKey(String(i))}>
											<TableStyledCell>{lesson.name}</TableStyledCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						)}
					</Container>
					<SCalendarContainer>
						<Container isPadding margin='0 0 30px 0'>
							<CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
						</Container>
						<SLink to={'/'}>Расписание</SLink>
					</SCalendarContainer>
				</SContainer>
			</SWrapper>
		</>
	);
};

export default ProfilePage;
