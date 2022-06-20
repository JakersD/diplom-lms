export const getUserData = (degree: string, facultyName: string, groupName: string) => [
	{
		title: 'Академическая степень',
		data: degree,
	},
	{
		title: 'Факультет',
		data: facultyName,
	},
	{
		title: 'Направление',
		data: groupName,
	},
];
