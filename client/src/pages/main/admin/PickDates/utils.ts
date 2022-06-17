import { getSemester } from '../../../../__data__/utils';

export const getOwnYear = () => {
	const yearNow = new Date().getFullYear();
	if (new Date().getMonth() + 1 >= 5) {
		return `${yearNow}-${yearNow + 1}`;
	}
	return yearNow;
};

interface IPickData {
	title: string;
	data: string;
	option?: {
		isDate?: boolean;
	};
}

export const getPickData = () => {
	const pickData = new Array(4).fill(0).map((_, i) => [
		{
			title: 'Даты',
			data: getOwnYear(),
		},
		{
			title: 'Курс',
			data: String(i + 1),
		},
		{
			title: 'Семестр',
			data: getSemester(),
		},
		{
			title: 'Дата начала',
			data: '01.09.2022',
			option: {
				isDate: true,
			},
		},
		{
			title: 'Дата окончания',
			data: '01.09.2022',
			option: {
				isDate: true,
			},
		},
	]) as IPickData[][];

	return [...pickData];
};
