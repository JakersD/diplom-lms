import React from 'react';
import { EDisciplineType, ERooms } from '../../../../../__data__/models';
import { getLessonType, getRoomType } from '../../../../../__data__/utils';
import { location10, person10 } from '../../../../../icons';

interface IProps {
	discipline: string;
	teacher: string;
	room: ERooms;
	type: EDisciplineType;
	selected?: boolean;
}

const Lesson: React.FC<IProps> = ({ discipline, teacher, room, type, selected = false }): JSX.Element => {
	return (
		<div
			style={{
				padding: '8px 16px',
				display: 'flex',
				flexDirection: 'column',
				height: '85%',
				justifyContent: 'space-around',
				backgroundColor: selected ? 'rgba(51, 108, 255, 0.12)' : '',
			}}
		>
			<p
				style={{
					fontFamily: 'Roboto',
					fontSize: '10px',
					lineHeight: '12px',
					color: '#8B8B8B',
					marginBottom: '4px',
				}}
			>
				{getLessonType(type)}
			</p>
			<p style={{ fontFamily: 'Roboto', fontSize: '12px', lineHeight: '14px', marginBottom: '4px' }}>
				{discipline}
			</p>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<img src={location10} alt='Иконка' style={{ marginRight: '8px' }} />
				<p style={{ fontFamily: 'Roboto', fontSize: '10px', lineHeight: '12px', color: '#8b8b8b' }}>
					{getRoomType(room)}
				</p>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<img src={person10} alt='Иконка' style={{ marginRight: '8px' }} />
				<p style={{ fontFamily: 'Roboto', fontSize: '10px', lineHeight: '12px', color: '#8b8b8b' }}>
					{teacher}
				</p>
			</div>
		</div>
	);
};

export default Lesson;
