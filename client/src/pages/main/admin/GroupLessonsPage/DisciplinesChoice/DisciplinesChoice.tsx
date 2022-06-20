import React from 'react';
import { useLocation } from 'react-router-dom';

import { LessonsList, MainTitle, Navbar } from '../../../../../components';
import MainDetails from '../../../../../components/DetailsHorizontal/MainDetails/MainDetails';
import { SMainContainer, SMainWrapper, STextLG } from '../../../Main.style';

const DisciplinesChoice = () => {
	const location = useLocation();

	const { level, facultyName, groupName, groupId } = location.state as any;
	return (
		<>
			<Navbar isDate />
			<MainTitle title='15.05.2022 направление ИТ, 4 курс, 2 семестр' />
			<SMainWrapper>
				<SMainContainer>
					<STextLG>Выберете обязательные дисциплины</STextLG>
					<MainDetails level={level} facultyName={facultyName} groupName={groupName} />
					<LessonsList title='Обязательные дисциплины' groupId={groupId} />
				</SMainContainer>
			</SMainWrapper>
		</>
	);
};

export default DisciplinesChoice;
