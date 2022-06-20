import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../__data__/hooks';
import { sendUserSchedule, setUserLessonsList } from '../../../../__data__/middlewares';
import { SActiveButton, SButtonsContainer, SNotActiveButton } from '../../admin/SetupSchedule/index.style';
import { SMainButton, SMainWrapper } from '../../Main.style';
import SetupScheduleTable from './SetupScheduleTable';
import UserScheduleTable from './UserScheduleTable';

const UserSetupSchedule = () => {
	const [isEven, setIsEven] = useState(true);

	const dispatch = useDispatch();

	const userSchedule = useTypedSelector((state) => state.formCollector.userSchedule);
	const lessons = useTypedSelector((state) => state.formCollector.additionalLessons);

	useEffect(() => {
		dispatch(setUserLessonsList());
	}, []);

	const handleSaveSchedule = () => {
		dispatch(sendUserSchedule());
	};

	return (
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
					<UserScheduleTable isEven={isEven} />
					{userSchedule.length >= lessons.length * 2 && (
						<SMainButton onClick={handleSaveSchedule}>Сохранить</SMainButton>
					)}
				</div>
			</div>
		</SMainWrapper>
	);
};

export default UserSetupSchedule;
