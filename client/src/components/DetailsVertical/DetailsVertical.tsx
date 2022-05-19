import React from 'react';
import { TDetail } from '../../__data__/models';

import { generateKey } from '../../__data__/utils';
import { SDetailsContainer, SDetailsData, SDetailsTitle } from './DetailsVertical.style';

interface IProps {
	details: Array<TDetail>;
}

const DetailsBottom: React.FC<IProps> = ({ details }) => {
	return (
		<>
			{details.map((detail, index) => (
				<SDetailsContainer key={generateKey(String(index))}>
					<SDetailsTitle key={generateKey(detail.title)}>{detail.title}</SDetailsTitle>
					<SDetailsData key={generateKey(detail.data)}>{detail.data}</SDetailsData>
				</SDetailsContainer>
			))}
		</>
	);
};

export default DetailsBottom;
