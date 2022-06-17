import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, DetailslHorizontal } from '../../../../components';
import { getStatus, sendSem } from '../../../../__data__/middlewares';
import { generateKey } from '../../../../__data__/utils';
import { SMainContainer, SMainWrapper, STextLG } from '../../Main.style';
import { SButton, SPickSemBlock } from '../PickDates/PickDates.style';
import { getPickData } from '../PickDates/utils';

const SemDates = () => {
	const dispatch = useDispatch();

	const handleClickButton = async () => {
		await dispatch(sendSem());
		await dispatch(getStatus());
	};

	return (
		<SMainWrapper>
			<SMainContainer>
				<STextLG>Добрый день, установите дату начала и окончания семестра</STextLG>
				{getPickData().map((data, i) => (
					<SPickSemBlock key={generateKey(String(i))}>
						<Container margin='0 0 24px 0' maxWidth='1000px'>
							<DetailslHorizontal isPick={false} details={data} level={i + 1} />
						</Container>
					</SPickSemBlock>
				))}
				<SButton onClick={handleClickButton}>Сохранить</SButton>
			</SMainContainer>
		</SMainWrapper>
	);
};

export default SemDates;
