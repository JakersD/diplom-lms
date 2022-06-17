import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, DetailslHorizontal } from '../../../../components';
import { getStatus, resetPickDates, sendPick } from '../../../../__data__/middlewares';
import { generateKey } from '../../../../__data__/utils';
import { SMainContainer, SMainWrapper, STextLG } from '../../Main.style';
import { SButton, SPickSemBlock } from './PickDates.style';
import { getPickData } from './utils';

const PickSem: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();

	const handleClickButton = async () => {
		await dispatch(sendPick());
		await dispatch(resetPickDates());
		await dispatch(getStatus());
	};

	return (
		<SMainWrapper>
			<SMainContainer>
				<STextLG>Добрый день, установите дату начала и окончания выбора учебных дисциплин</STextLG>
				{getPickData().map((data, i) => (
					<SPickSemBlock key={generateKey(String(i))}>
						<Container margin='0 0 24px 0' maxWidth='1000px'>
							<DetailslHorizontal isPick={true} details={data} level={i + 1} />
						</Container>
					</SPickSemBlock>
				))}
				<SButton onClick={handleClickButton}>Сохранить</SButton>
			</SMainContainer>
		</SMainWrapper>
	);
};

export default PickSem;
