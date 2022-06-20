import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Table, TableBody, TableHead, TableRow } from '@mui/material';

import { SMainButton, STextLG } from '../../pages/main/Main.style';
import Container from '../Container/Container';
import SelectIndicator from './SelectIndicator';
import TableStyledCell from '../Table/TableStyledCell';
import { useDispatch } from 'react-redux';
import { getLessonsList, sendLessonsList } from '../../__data__/middlewares';
import { useTypedSelector } from '../../__data__/hooks';
import { generateKey } from '../../__data__/utils';
import { arrowRight24 } from '../../icons';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';

interface IProps {
	title: string;
	groupId: string;
}

const LessonsList: React.FC<IProps> = ({ title, groupId }): JSX.Element => {
	const [checkedState, setCheckedState] = useState<boolean[]>([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const lessons = useTypedSelector((state) => state.general.data?.lessons);

	useEffect(() => {
		setCheckedState(new Array(lessons?.length).fill(false));
	}, [lessons]);

	useEffect(() => {
		dispatch(getLessonsList());
	}, []);

	const calculateState = (state: Array<boolean>) => state.filter((v) => v).length;

	const handleCheck = (position: number) => {
		const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));

		setCheckedState(updatedCheckedState);
	};

	const handleSubmit = async () => {
		const pickedDisciplines = checkedState.map((v, i) => (v ? lessons![i]._id : '')).filter((v) => v);

		if (!isEmpty(pickedDisciplines)) {
			await dispatch(sendLessonsList(groupId, pickedDisciplines));
			navigate('/');
		}
	};

	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'fit-content' }}>
				<Container width='670px' maxHeight='448px' margin='0 0 10px 0'>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<STextLG padding='0'>{title}</STextLG>
						<SelectIndicator state={checkedState} amount={4} />
					</div>
				</Container>
				<Container width='670px' maxHeight='348px' padding='10px 20px'>
					{!lessons ? (
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<CircularProgress />
						</Box>
					) : (
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableStyledCell padding='checkbox'></TableStyledCell>
									<TableStyledCell>Дисциплина</TableStyledCell>
									<TableStyledCell padding='checkbox'></TableStyledCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{lessons?.map((lesson, i) => (
									<TableRow
										key={generateKey(String(i))}
										onClick={() => handleCheck(i)}
										style={{ cursor: 'pointer' }}
									>
										<TableStyledCell padding='checkbox'>
											<input
												type='checkbox'
												name={lesson.name}
												value={lesson.name}
												checked={checkedState[i]}
												onChange={() => handleCheck(i)}
											/>
										</TableStyledCell>
										<TableStyledCell>{lesson.name}</TableStyledCell>
										<TableStyledCell
											padding='checkbox'
											style={{ cursor: 'pointer' }}
											onClick={(e) => {
												e.stopPropagation();
												//TODO: Доделать появление информации о предметах
											}}
										>
											<img src={arrowRight24} alt='Стрелка вправо' />
										</TableStyledCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					)}
				</Container>
				{calculateState(checkedState) === 4 && (
					<SMainButton margin='24px 0 0 0' style={{ alignSelf: 'flex-end' }} onClick={handleSubmit}>
						Подтвердить
					</SMainButton>
				)}
			</div>
		</div>
	);
};

export default LessonsList;
