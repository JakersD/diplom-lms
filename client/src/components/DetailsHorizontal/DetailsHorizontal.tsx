import React from 'react';

import { generateKey } from '../../__data__/utils';
import { SDetail, STitle, SFlexContainer, SDetailsBlock } from './DetailsHorizontal.style';

interface IDetails {
	title: string;
	data: string;
}

interface IProps {
	details: Array<IDetails>;
}

const Details: React.FC<IProps> = ({ details }) => {
	return (
		<SFlexContainer>
			{details.map((detail, index) => (
				<SDetailsBlock key={generateKey(String(index))}>
					<STitle key={generateKey(detail.title)}>{detail.title}</STitle>
					<SDetail key={generateKey(detail.data)}>{detail.data}</SDetail>
				</SDetailsBlock>
			))}
		</SFlexContainer>
	);
};

export default Details;
