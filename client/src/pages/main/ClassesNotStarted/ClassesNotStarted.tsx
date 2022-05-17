import React, { useState } from 'react';
import { CalendarPicker } from '@mui/x-date-pickers';
import { PickersDay, PickersDayProps, pickersDayClasses } from '@mui/x-date-pickers/PickersDay';
import isSameDay from 'date-fns/isSameDay';

import { Container, Details } from '../../../components';
import { SClassesContainer, SClassesItem, SClassesMessage } from './index.style';

const renderWeekPickerDay = (date: Date, selectedDates: Array<Date | null>, pickersDayProps: PickersDayProps<Date>) => {
	const matchedStyles = tempHighlightedDays.reduce((a, v) => {
		return isSameDay(date, v.date) ? v.styles : a;
	}, {});

	return (
		<PickersDay
			{...pickersDayProps}
			sx={{
				...matchedStyles,
				[`&&.${pickersDayClasses.selected}`]: {
					backgroundColor: 'none',
				},
			}}
		/>
	);
};

const parseDate = (date: string) => {
	const newDate = date.split('.');
	return new Date(`${newDate[2]}-${newDate[1]}-${newDate[0]}`);
};

type HighlightedDay = {
	date: Date;
	styles: React.CSSProperties;
};
const tempHighlightedDays: Array<HighlightedDay> = [
	{
		date: parseDate('01.08.2022'),
		styles: {
			backgroundColor: '#58D497',
			color: 'white',
		},
	},
	{
		date: parseDate('25.08.2022'),
		styles: {
			backgroundColor: '#58D497',
			color: 'white',
		},
	},
];

const tempDetails = [
	{
		title: 'Выбор предметов',
		data: '01.08.2022 - 25.08.2022',
	},
	{
		title: 'Начало обучения',
		data: '01.09.2022',
	},
];

const ClassesNotStarted: React.FC = () => {
	const [date, setDate] = useState<Date | null>(new Date());

	return (
		<SClassesContainer>
			<SClassesItem>
				<SClassesMessage>Просмотр расписания пока невозможен, вернитесь позже</SClassesMessage>
				<Container>
					<Details details={tempDetails} />
				</Container>
			</SClassesItem>
			<Container>
				<CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} renderDay={renderWeekPickerDay} />
			</Container>
		</SClassesContainer>
	);
};

export default ClassesNotStarted;
