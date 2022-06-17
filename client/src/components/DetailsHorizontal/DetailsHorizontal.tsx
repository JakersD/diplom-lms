import React from 'react';

import { generateKey } from '../../__data__/utils';
import { SDetail, STitle, SFlexContainer, SDetailsBlock } from './DetailsHorizontal.style';
import Modal from './Modal';

interface IDetails {
	title: string;
	data: string;
	option?: {
		isDate?: boolean;
	};
}

interface IProps {
	details: Array<IDetails>;
	isPick?: boolean;
	level?: number;
}

const Details: React.FC<IProps> = ({ details, level, isPick }) => {
	return (
		<SFlexContainer>
			{details.map((detail, index) => (
				<SDetailsBlock key={generateKey(String(index))}>
					<STitle key={generateKey(detail.title)}>{detail.title}</STitle>
					{detail.option?.isDate ? (
						<Modal isStart={index === 3 ?? true} level={level!} isPick={isPick!} />
					) : (
						<SDetail key={generateKey(detail.data)}>{detail.data}</SDetail>
					)}
				</SDetailsBlock>
			))}
		</SFlexContainer>
	);
};

export default Details;
