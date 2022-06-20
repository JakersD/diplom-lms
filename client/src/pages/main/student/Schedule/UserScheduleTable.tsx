import { isEmpty, isEqual } from 'lodash';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../__data__/hooks';
import { addUserSchedule } from '../../../../__data__/middlewares';
import {
	SScheduleGridContainer,
	SSheduleHeaderTextContainer,
	SShedulerHeader,
	SShedulerHeaderText,
} from '../../admin/SetupSchedule/SetupScheduler/index.style';
import { getUserLessonView } from './utils';

interface IProps {
	isEven: boolean;
}

const UserScheduleTable: React.FC<IProps> = ({ isEven }) => {
	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useDispatch();

	const lessons = useTypedSelector((state) => state.formCollector.additionalLessons);
	const select = useTypedSelector((state) => state.formCollector.scheduler?.select);
	const userSchedule = useTypedSelector((state) => state.formCollector.userSchedule);

	const handleLessonClick = (day: number, time: number) => {
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

		const localParity = isEven ? 'even' : 'odd';
		if (
			lessons.some((v) =>
				v.schedule.some(
					(d: any) =>
						d.lessonName === select?.lessonName &&
						d.teacher === select?.teacherName &&
						d.day === day &&
						d.time === time &&
						d.parity === localParity
				)
			)
		) {
			const AA: any = lessons
				.map((v) =>
					v.schedule.find(
						(d: any) =>
							d.lessonName === select?.lessonName &&
							d.teacher === select?.teacherName &&
							d.day === day &&
							d.time === time &&
							d.parity === localParity
					)
				)
				.filter((v) => v);

			if (userSchedule.some((v) => isEqual(v, AA[0]))) {
				return;
			}

			dispatch(addUserSchedule(AA[0]));
		}
	};

	return (
		<>
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
						onClick={() => handleLessonClick(1, 1)}
					>
						{getUserLessonView(1, 1, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(2, 1)}
					>
						{getUserLessonView(2, 1, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(3, 1)}
					>
						{getUserLessonView(3, 1, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(4, 1)}
					>
						{getUserLessonView(4, 1, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(5, 1)}
					>
						{getUserLessonView(5, 1, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(1, 2)}
					>
						{getUserLessonView(1, 2, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(2, 2)}
					>
						{getUserLessonView(2, 2, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(3, 2)}
					>
						{getUserLessonView(3, 2, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(4, 2)}
					>
						{getUserLessonView(4, 2, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(5, 2)}
					>
						{getUserLessonView(5, 2, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(1, 3)}
					>
						{getUserLessonView(1, 3, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(2, 3)}
					>
						{getUserLessonView(2, 3, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(3, 3)}
					>
						{getUserLessonView(3, 3, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(4, 3)}
					>
						{getUserLessonView(4, 3, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(5, 3)}
					>
						{getUserLessonView(5, 3, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(1, 4)}
					>
						{getUserLessonView(1, 4, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(2, 4)}
					>
						{getUserLessonView(2, 4, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(3, 4)}
					>
						{getUserLessonView(3, 4, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(4, 4)}
					>
						{getUserLessonView(4, 4, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(5, 4)}
					>
						{getUserLessonView(5, 4, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(1, 5)}
					>
						{getUserLessonView(1, 5, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(2, 5)}
					>
						{getUserLessonView(2, 5, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(3, 5)}
					>
						{getUserLessonView(3, 5, select, lessons, userSchedule, isEven)}
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
						onClick={() => handleLessonClick(4, 5)}
					>
						{getUserLessonView(4, 5, select, lessons, userSchedule, isEven)}
					</div>
					<div
						style={{ width: '216px', height: '106px', backgroundColor: '#fff', cursor: 'pointer' }}
						onClick={() => handleLessonClick(5, 5)}
					>
						{getUserLessonView(5, 5, select, lessons, userSchedule, isEven)}
					</div>
				</SScheduleGridContainer>
			</div>
		</>
	);
};

export default UserScheduleTable;
