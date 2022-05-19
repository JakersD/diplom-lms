import React from 'react';

import Container from '../Container/Container';
import { SContainer, STitle } from './LessonsList.style';

interface IProps {
	title: string;
}

const LessonsList: React.FC<IProps> = ({ title }): JSX.Element => {
	return (
		<Container width='652px'>
			<SContainer>
				<STitle>{title}</STitle>
			</SContainer>
		</Container>
	);
};

export default LessonsList;
