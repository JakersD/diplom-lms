import { Modal } from '@mui/material';
import { isEmpty } from 'lodash';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, DefaultInput, SelectLessonType, SelectRoom } from '../../../../../components';
import { useTypedSelector } from '../../../../../__data__/hooks';
import { addNewLesson } from '../../../../../__data__/middlewares';
import { EDisciplineType, ERooms } from '../../../../../__data__/models';
import { SMainButton, SMainContainer, SMainWrapper } from '../../../Main.style';

import {
	SScheduleGridContainer,
	SSheduleHeaderTextContainer,
	SShedulerHeader,
	SShedulerHeaderText,
} from './index.style';
import { getLessonView } from './utils';

interface IProps {
	isEven: boolean;
}

const SetupScheduler: React.FC<IProps> = ({ isEven }): JSX.Element => {
	const [openModal, setOpenModal] = useState(false);
	const [clickState, setClickState] = useState<{ time: number | null; number: number | null }>({
		time: null,
		number: null,
	});
	const [typeSelect, setTypeSelect] = useState<EDisciplineType | null>(null);
	const [roomSelect, setRoomSelect] = useState<ERooms | null>(null);

	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useDispatch();

	const select = useTypedSelector((state) => state.formCollector.scheduler?.select);
	const data = useTypedSelector((state) =>
		isEven ? state.formCollector.scheduler?.even : state.formCollector.scheduler?.odd
	);

	const handleBoxClick = (time: number, number: number) => {
		if (isEmpty(select?.lessonName)) {
			return enqueueSnackbar('Выберите предмет', {
				variant: 'info',
			});
		}

		if (isEmpty(select?.teacherId)) {
			return enqueueSnackbar('Выберите преподавателя', {
				variant: 'info',
			});
		}

		if (
			data.some(
				(v) =>
					v.lessonName === select?.lessonName &&
					v.teacher === select.teacherName &&
					v.day === number &&
					v.time === time
			)
		) {
			return enqueueSnackbar('Дата уже занята', {
				variant: 'info',
			});
		}

		setClickState({ time, number });
		setOpenModal(true);
	};

	const handleModalSumbit = () => {
		if (isEmpty(typeSelect) || isEmpty(roomSelect)) {
			return enqueueSnackbar('Не выбраны тип занятия или аудитория', {
				variant: 'warning',
			});
		}

		const formatSchedule = {
			lessonName: select?.lessonName || '',
			lessonId: select?.lessonId || '',
			teacher: select?.teacherName || '',
			teacherId: select?.teacherId || '',
			type: typeSelect,
			room: roomSelect,
			day: clickState.number,
			time: clickState.time,
		};
		dispatch(addNewLesson(isEven, formatSchedule));

		setClickState({ time: null, number: null });
		setOpenModal(false);
		setTypeSelect(null);
		setRoomSelect(null);
	};

	return (
		<>
			<Modal
				open={openModal}
				onClose={() => {
					setClickState({ time: null, number: null });
					setTypeSelect(null);
					setRoomSelect(null);
					setOpenModal(false);
				}}
			>
				<div style={{ position: 'absolute', top: '20%', left: '38%' }}>
					<Container width='362px'>
						<SMainWrapper>
							<SMainContainer>
								<p
									style={{
										fontFamily: 'Roboto',
										fontSize: '24px',
										lineHeight: '28px',
										marginBottom: '28px',
									}}
								>
									Создание занятия
								</p>
								<DefaultInput title='Название' value={select?.lessonName || ''} />
								<DefaultInput title='Преподаватель' value={select?.teacherName || ''} />
								<SelectLessonType select={typeSelect} setSelect={setTypeSelect} />
								<SelectRoom select={roomSelect} setSelect={setRoomSelect} />
								<SMainButton onClick={handleModalSumbit}>Сохранить</SMainButton>
							</SMainContainer>
						</SMainWrapper>
					</Container>
				</div>
			</Modal>
			<div style={{ position: 'relative', zIndex: 1 }}>
				<SShedulerHeader>
					<div></div>
					<SSheduleHeaderTextContainer>
						<SShedulerHeaderText>ПН</SShedulerHeaderText>
					</SSheduleHeaderTextContainer>
					<SSheduleHeaderTextContainer>
						<SShedulerHeaderText>ВТ</SShedulerHeaderText>
					</SSheduleHeaderTextContainer>
					<SSheduleHeaderTextContainer>
						<SShedulerHeaderText>СР</SShedulerHeaderText>
					</SSheduleHeaderTextContainer>
					<SSheduleHeaderTextContainer>
						<SShedulerHeaderText>ЧТ</SShedulerHeaderText>
					</SSheduleHeaderTextContainer>
					<SSheduleHeaderTextContainer>
						<SShedulerHeaderText>ПТ</SShedulerHeaderText>
					</SSheduleHeaderTextContainer>
				</SShedulerHeader>
				<SScheduleGridContainer>
					<div style={{ height: '50px', backgroundColor: '#fff', borderTopLeftRadius: '30px' }}></div>
					<div style={{ height: '50px', backgroundColor: '#fff' }}></div>
					<div style={{ height: '50px', backgroundColor: '#fff' }}></div>
					<div style={{ height: '50px', backgroundColor: '#fff' }}></div>
					<div style={{ height: '50px', backgroundColor: '#fff' }}></div>
					<div style={{ height: '50px', backgroundColor: '#fff', borderTopRightRadius: '30px' }}></div>
					<div
						style={{
							width: '100%',
							borderBottom: '1px solid #BBBBBB',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<SShedulerHeaderText>9:30-11:05</SShedulerHeaderText>
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderLeft: '1px solid',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(1, 1)}
					>
						{getLessonView(1, 1, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(1, 2)}
					>
						{getLessonView(1, 2, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(1, 3)}
					>
						{getLessonView(1, 3, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(1, 4)}
					>
						{getLessonView(1, 4, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(1, 5)}
					>
						{getLessonView(1, 5, select, data)}
					</div>
					<div
						style={{
							width: '100%',
							borderBottom: '1px solid #BBBBBB',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<SShedulerHeaderText>11:20-12:55</SShedulerHeaderText>
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderLeft: '1px solid',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(2, 1)}
					>
						{getLessonView(2, 1, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(2, 2)}
					>
						{getLessonView(2, 2, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(2, 3)}
					>
						{getLessonView(2, 3, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(2, 4)}
					>
						{getLessonView(2, 4, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(2, 5)}
					>
						{getLessonView(2, 5, select, data)}
					</div>
					<div
						style={{
							width: '100%',
							borderBottom: '1px solid #BBBBBB',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<SShedulerHeaderText>13:10-14:45</SShedulerHeaderText>
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderLeft: '1px solid',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(3, 1)}
					>
						{getLessonView(3, 1, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(3, 2)}
					>
						{getLessonView(3, 2, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(3, 3)}
					>
						{getLessonView(3, 3, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(3, 4)}
					>
						{getLessonView(3, 4, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(3, 5)}
					>
						{getLessonView(3, 5, select, data)}
					</div>
					<div
						style={{
							width: '100%',
							borderBottom: '1px solid #BBBBBB',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<SShedulerHeaderText>15:25-17:00</SShedulerHeaderText>
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderLeft: '1px solid',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(4, 1)}
					>
						{getLessonView(4, 1, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(4, 2)}
					>
						{getLessonView(4, 2, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(4, 3)}
					>
						{getLessonView(4, 3, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(4, 4)}
					>
						{getLessonView(4, 4, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderBottom: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(4, 5)}
					>
						{getLessonView(4, 5, select, data)}
					</div>
					<div
						style={{
							width: '100%',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<SShedulerHeaderText>15:25-17:00</SShedulerHeaderText>
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderLeft: '1px solid',
							borderRight: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(5, 1)}
					>
						{getLessonView(5, 1, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(5, 2)}
					>
						{getLessonView(5, 2, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(5, 3)}
					>
						{getLessonView(5, 3, select, data)}
					</div>
					<div
						style={{
							width: '216px',
							height: '106px',
							borderRight: '1px solid',
							borderColor: '#BBBBBB',
							backgroundColor: '#fff',
							cursor: 'pointer',
						}}
						onClick={() => handleBoxClick(5, 4)}
					>
						{getLessonView(5, 4, select, data)}
					</div>
					<div
						style={{ width: '216px', height: '106px', backgroundColor: '#fff', cursor: 'pointer' }}
						onClick={() => handleBoxClick(5, 5)}
					>
						{getLessonView(5, 5, select, data)}
					</div>
				</SScheduleGridContainer>
			</div>
		</>
	);
};

export default SetupScheduler;
