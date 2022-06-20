import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';

import { Box, CircularProgress, IconButton, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { Container, TableStyledCell } from '../../../../../components';
import { useTypedSelector } from '../../../../../__data__/hooks';
import { getLessonsList, selectLesson } from '../../../../../__data__/middlewares';
import { generateKey } from '../../../../../__data__/utils';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import TeachersTable from './TeachersTable';
import { ITeacher } from '../../../../../__data__/models';

const SetupScheduleTable: React.FC = (): JSX.Element => {
	const [pickedDiscipline, setPickedDiscipline] = useState<{ teachers: ITeacher[]; isOpen: boolean }>({
		teachers: [],
		isOpen: false,
	});

	const dispatch = useDispatch();

	const lessons = useTypedSelector((state) => state.general.data?.lessons);

	useEffect(() => {
		dispatch(getLessonsList());
	}, []);

	const handlePickDiscipline = (lesson: string, lessonId: string) => {
		dispatch(selectLesson(lessonId, lesson));
	};

	if (pickedDiscipline.isOpen) {
		return <TeachersTable setPicked={setPickedDiscipline} teachers={pickedDiscipline.teachers} />;
	}

	return (
		<Container width='488px' minHeight='603px' padding='10px 20px' margin='32px 32px 0 0'>
			{isEmpty(lessons) ? (
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<CircularProgress />
				</Box>
			) : (
				<Table aria-label='simple table' stickyHeader>
					<TableHead>
						<TableRow>
							<TableStyledCell>Дисциплина</TableStyledCell>
							<TableStyledCell padding='checkbox'></TableStyledCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{lessons?.map((lesson, i) => (
							<TableRow
								style={{ cursor: 'pointer' }}
								key={generateKey(String(i))}
								onClick={() => {
									setPickedDiscipline({ teachers: lesson.teachersIds, isOpen: true });
									handlePickDiscipline(lesson.name, lesson._id);
								}}
							>
								<TableStyledCell>{lesson.name}</TableStyledCell>
								<TableStyledCell>
									<IconButton size='small'>
										<KeyboardArrowRight />
									</IconButton>
								</TableStyledCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</Container>
	);
};

export default SetupScheduleTable;
