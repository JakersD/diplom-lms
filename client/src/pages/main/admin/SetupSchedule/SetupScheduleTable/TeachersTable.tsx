import React, { useState } from 'react';
import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import { Container, TableStyledCell } from '../../../../../components';
import { ITeacher } from '../../../../../__data__/models';
import { generateKey } from '../../../../../__data__/utils';
import { useDispatch } from 'react-redux';
import { resetSelect, selectTeacher } from '../../../../../__data__/middlewares';

interface IProps {
	teachers: ITeacher[];
	setPicked: React.Dispatch<
		React.SetStateAction<{
			teachers: ITeacher[];
			isOpen: boolean;
		}>
	>;
}

const TeachersTable: React.FC<IProps> = ({ teachers, setPicked }) => {
	const [checked, setChecked] = useState(new Array(teachers.length).fill(false));

	const dispatch = useDispatch();

	const handleCheck = (position: number, teacherId: string, teacherName: string) => {
		const updatedCheckedState = checked.map((_, index) => (index === position ? true : false));

		setChecked(updatedCheckedState);
		dispatch(selectTeacher(teacherId, teacherName));
	};

	return (
		<Container width='488px' minHeight='663px' padding='10px 20px' margin='32px 32px 0 0'>
			<Table stickyHeader>
				<TableHead>
					<TableRow>
						<TableStyledCell padding='checkbox'></TableStyledCell>
						<TableStyledCell>Преподаватели</TableStyledCell>
						<TableStyledCell>
							<button
								onClick={() => {
									setPicked({ teachers: teachers, isOpen: false });
									dispatch(resetSelect());
								}}
							>
								Назад
							</button>
						</TableStyledCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{teachers?.map((teacher, i) => (
						<TableRow
							style={{ cursor: 'pointer' }}
							key={generateKey(String(i))}
							onClick={() => handleCheck(i, teacher._id, teacher.fio)}
						>
							<TableStyledCell>
								<input
									type='checkbox'
									name={teacher.fio}
									value={teacher.fio}
									checked={checked[i]}
									onChange={() => handleCheck(i, teacher._id, teacher.fio)}
								/>
							</TableStyledCell>
							<TableStyledCell>{teacher.fio}</TableStyledCell>
							<TableStyledCell></TableStyledCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default TeachersTable;
