import React, { useState } from 'react';
import { SActiveButton, SButtonsContainer, SNotActiveButton } from '../admin/SetupSchedule/index.style';
import { SMainWrapper, STextLG } from '../Main.style';
import DoneScheduleTable from './DoneScheduleTable';

const DoneSchedule: React.FC = () => {
	const [isEven, setIsEven] = useState(true);

	return (
		<SMainWrapper>
			<div style={{ marginLeft: '30px' }}>
				<STextLG style={{ paddingBottom: '0' }}>Расписание</STextLG>
				<SButtonsContainer>
					{isEven ? (
						<>
							<SActiveButton onClick={() => setIsEven(true)} style={{ marginRight: '16px' }}>
								Четная неделя
							</SActiveButton>
							<SNotActiveButton onClick={() => setIsEven(false)}>Нечетная неделя</SNotActiveButton>
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
				<DoneScheduleTable isEven={isEven} />
			</div>
		</SMainWrapper>
	);
};

export default DoneSchedule;
