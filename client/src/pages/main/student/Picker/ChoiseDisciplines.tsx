import React, { useState } from 'react';
import MainDetails from '../../../../components/DetailsHorizontal/MainDetails/MainDetails';
import { useTypedSelector } from '../../../../__data__/hooks';
import { SMainContainer, SMainWrapper, STextLG } from '../../Main.style';
import AdditionalLessonList from './AdditionalLessonList';
import LessonListDisciplines from './LessonListDisciplines';

interface IProps {
	setIsPicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChoiseDisciplines: React.FC<IProps> = ({ setIsPicked }) => {
	const [famil, setFamil] = useState(false);

	const group = useTypedSelector((state) => state.user.data?.groupId);
	const faculty = useTypedSelector((state) => state.user.data?.facultyId);

	return (
		<SMainWrapper>
			<SMainContainer>
				{!famil ? (
					<>
						<STextLG>Ознакомьтесь с обязательными дисциплинами на этот семестр</STextLG>
						<MainDetails level={group!.level} facultyName={faculty!.shortName} groupName={group!.name} />
						<LessonListDisciplines title='Обязательные дисциплины' setFamil={setFamil} />
					</>
				) : (
					<>
						<STextLG>Выберите дополнительные дисциплины</STextLG>
						<MainDetails level={group!.level} facultyName={faculty!.shortName} groupName={group!.name} />
						<AdditionalLessonList title='Дополнительные дисциплины' setIsPicked={setIsPicked} />
					</>
				)}
			</SMainContainer>
		</SMainWrapper>
	);
};

export default ChoiseDisciplines;
