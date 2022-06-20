import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MainTitle, Navbar } from '../../../../components';
import { getStatus, sendSchedule } from '../../../../__data__/middlewares';
import { SMainButton, SMainWrapper } from '../../Main.style';
import { SActiveButton, SButtonsContainer, SNotActiveButton } from './index.style';
import SetupScheduler from './SetupScheduler';
import SetupScheduleTable from './SetupScheduleTable';

const SetupSchedule: React.FC = (): JSX.Element => {
	const [isEven, setIsEven] = useState(true);

	const dispatch = useDispatch();

	const handleSaveSchedule = async () => {
		await dispatch(sendSchedule());
		await dispatch(getStatus());
	};

	return (
		<>
			<Navbar isDate />
			<MainTitle title='15.05.2022 направление ИТ, 4 курс, 2 семестр' />
			<SMainWrapper>
				<div style={{ display: 'flex', width: 'max-content' }}>
					<SetupScheduleTable />
					<div>
						<SButtonsContainer>
							{isEven ? (
								<>
									<SActiveButton onClick={() => setIsEven(true)} style={{ marginRight: '16px' }}>
										Четная неделя
									</SActiveButton>
									<SNotActiveButton onClick={() => setIsEven(false)}>
										Нечетная неделя
									</SNotActiveButton>
								</>
							) : (
								<>
									<SNotActiveButton onClick={() => setIsEven(true)} style={{ marginRight: '16px' }}>
										Четная неделя
									</SNotActiveButton>
									<SActiveButton onClick={() => setIsEven(false)}>Нечетная неделя</SActiveButton>
								</>
							)}
						</SButtonsContainer>
						<SetupScheduler isEven={isEven} />
						<SMainButton onClick={handleSaveSchedule}>Сохранить</SMainButton>
					</div>
				</div>
			</SMainWrapper>
		</>
	);
};

export default SetupSchedule;
