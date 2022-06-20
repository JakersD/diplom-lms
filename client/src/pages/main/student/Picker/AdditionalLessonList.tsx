import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { Container, TableStyledCell } from '../../../../components';
import { SMainButton, STextLG } from '../../Main.style';
import { useTypedSelector } from '../../../../__data__/hooks';
import { useDispatch } from 'react-redux';
import { getAdditionalLessons, sendAdditionalUserLesson } from '../../../../__data__/middlewares';
import { generateKey } from '../../../../__data__/utils';
import { arrowRight24 } from '../../../../icons';
import { isEmpty } from 'lodash';
import SelectIndicator from '../../../../components/LessonsList/SelectIndicator';

interface IProps {
	title: string;
	setIsPicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const calculateState = (state: Array<boolean>) => state.filter((v) => v).length;

const AdditionalLessonList: React.FC<IProps> = ({ title, setIsPicked }) => {
	const [checkedState, setCheckedState] = useState<boolean[]>([]);

	const dispatch = useDispatch();

	const lessons = useTypedSelector((state) => state.formCollector.additionalLessons);

	useEffect(() => {
		dispatch(getAdditionalLessons());
	}, []);
	useEffect(() => {
		setCheckedState(new Array(lessons?.length).fill(false));
	}, [lessons]);

	const handleCheck = (position: number) => {
		const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));

		setCheckedState(updatedCheckedState);
	};

	const handleSubmit = () => {
		const pickedDisciplines = checkedState.map((v, i) => (v ? lessons![i]._id : '')).filter((v) => v);

		if (!isEmpty(pickedDisciplines)) {
			dispatch(sendAdditionalUserLesson(pickedDisciplines));
			setIsPicked(true);
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
					{isEmpty(lessons) ? (
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
										style={{ cursor: 'pointer' }}
										onClick={() => handleCheck(i)}
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

export default AdditionalLessonList;
