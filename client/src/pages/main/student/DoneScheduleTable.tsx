import React from 'react';
import { useTypedSelector } from '../../../__data__/hooks';
import { IA } from '../../../__data__/models';
import { generateKey } from '../../../__data__/utils';
import {
	SScheduleGridContainer,
	SSheduleHeaderTextContainer,
	SShedulerHeader,
	SShedulerHeaderText,
} from '../admin/SetupSchedule/SetupScheduler/index.style';
import Lesson from '../admin/SetupSchedule/SetupScheduler/Lesson';

interface IProps {
	isEven: boolean;
}

type ILessonProp = Array<IA>;

const getScheduleDoneLessonView = (day: number, time: number, lessons: ILessonProp | undefined, isEven: boolean) => {
	const localParity = isEven ? 'even' : 'odd';

	return (
		<>
			{lessons?.map(
				(v, i) =>
					v.time === time &&
					v.day === day &&
					v.parity === localParity && (
						<Lesson
							key={generateKey(String(i))}
							discipline={v.lessonName}
							room={v.room}
							teacher={v.teacher}
							type={v.type}
						/>
					)
			)}
		</>
	);
};

const DoneScheduleTable: React.FC<IProps> = ({ isEven }) => {
	const lessons = useTypedSelector((state) => state.user.data?.schedule);

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
					>
						{getScheduleDoneLessonView(1, 1, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(2, 1, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(3, 1, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(4, 1, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(5, 1, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(1, 2, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(2, 2, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(3, 2, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(4, 2, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(5, 2, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(1, 3, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(2, 3, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(3, 3, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(4, 3, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(5, 3, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(1, 4, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(2, 4, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(3, 4, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(4, 4, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(5, 4, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(1, 5, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(2, 5, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(3, 5, lessons, isEven)}
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
					>
						{getScheduleDoneLessonView(4, 5, lessons, isEven)}
					</div>
					<div style={{ width: '216px', height: '106px', backgroundColor: '#fff', cursor: 'pointer' }}>
						{getScheduleDoneLessonView(5, 5, lessons, isEven)}
					</div>
				</SScheduleGridContainer>
			</div>
		</>
	);
};

export default DoneScheduleTable;
