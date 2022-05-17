import React from 'react';

import { SMainContainer, STitle } from './MainTitle.style';

interface IProps {
	title?: string;
}

const MainTitle: React.FC<IProps> = ({ title }) => {
	return (
		<SMainContainer>
			<STitle>{title}</STitle>
		</SMainContainer>
	);
};

export default MainTitle;
