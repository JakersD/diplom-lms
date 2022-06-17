import React from 'react';

import { DetailslHorizontal, Container } from '../..';
import { getOwnYear } from '../../../pages/main/admin/PickDates/utils';

const getDetails = (level: number, faculty: string, group: string) => [
	{
		title: 'Даты',
		data: String(getOwnYear()),
	},
	{
		title: 'Курс',
		data: String(level),
	},
	{
		title: 'Направление',
		data: faculty,
	},
	{
		title: 'Факультет',
		data: group,
	},
];

interface IProps {
	level: number;
	facultyName: string;
	groupName: string;
}

const MainDetails: React.FC<IProps> = ({ facultyName, groupName, level }): JSX.Element => {
	return (
		<Container margin='0 0 32px 0'>
			<DetailslHorizontal details={getDetails(level, facultyName, groupName)} />
		</Container>
	);
};

export default MainDetails;
