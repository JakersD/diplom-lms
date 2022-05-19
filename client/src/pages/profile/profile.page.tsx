import React, { useState } from 'react';

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
import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers';
import { Link } from 'react-router-dom';

const mockDetails: Array<TDetail> = [
	{
		title: 'Академическая степень',
		data: 'Бакалавриат',
	},
	{
		title: 'Направление',
		data: '«Программное обеспечение и интеллектуальные системы»',
	},
	{
		title: 'Группа',
		data: 'БВТ',
	},
];

const ProfilePage: React.FC = (): JSX.Element => {
	const [date, setDate] = useState<Date | null>(new Date());

	return (
		<>
			<Navbar isProfile />
			<MainTitle title='15.05.2022 направление ИТ, 4 курс, 2 семестр' />
			<SWrapper>
				<SContainer>
					<Container width='363px' margin='0 32px 0 0' isFullHeight>
						<UserInfo name='Милос Рикардо Гачимучивич' icon={mainPerson} details={mockDetails} />
					</Container>
					<Container width='652px' margin='0 32px 0 0'>
						<SLessonsTitle>Дисциплины</SLessonsTitle>
						<Table sx={{ minWidth: 650 }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableStyledCell>Дисциплина</TableStyledCell>
									<TableStyledCell>Кол-во ак. часов</TableStyledCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableStyledCell>Безопасность жизнидеятельности</TableStyledCell>
									<TableStyledCell>24 ч.</TableStyledCell>
								</TableRow>
								<TableRow>
									<TableStyledCell>Архитектура центров обработки данных</TableStyledCell>
									<TableStyledCell>24 ч.</TableStyledCell>
								</TableRow>
								<TableRow>
									<TableStyledCell>Экономика отрасли</TableStyledCell>
									<TableStyledCell>24 ч.</TableStyledCell>
								</TableRow>
								<TableRow>
									<TableStyledCell>Системы искусственного интеллекта</TableStyledCell>
									<TableStyledCell>24 ч.</TableStyledCell>
								</TableRow>
								<TableRow>
									<TableStyledCell>Безопасность жизнидеятельности</TableStyledCell>
									<TableStyledCell>24 ч.</TableStyledCell>
								</TableRow>
								<TableRow>
									<TableStyledCell>Архитектура центров обработки данных</TableStyledCell>
									<TableStyledCell>24 ч.</TableStyledCell>
								</TableRow>
								<TableRow>
									<TableStyledCell>Экономика отрасли</TableStyledCell>
									<TableStyledCell>24 ч.</TableStyledCell>
								</TableRow>
								<TableRow>
									<TableStyledCell>Системы искусственного интеллекта</TableStyledCell>
									<TableStyledCell>24 ч.</TableStyledCell>
								</TableRow>
							</TableBody>
						</Table>
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
