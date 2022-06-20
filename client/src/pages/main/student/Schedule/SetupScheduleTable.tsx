import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, CircularProgress, IconButton, Table, TableBody, TableHead, TableRow } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Container, TableStyledCell } from '../../../../components';
import { useTypedSelector } from '../../../../__data__/hooks';
import { selectLesson } from '../../../../__data__/middlewares';
import { ITeacher } from '../../../../__data__/models';
import { isEmpty } from 'lodash';
import { generateKey } from '../../../../__data__/utils';
import TeachersTable from '../../admin/SetupSchedule/SetupScheduleTable/TeachersTable';
import UserSelectIndicator from './UserSelectIndicator';

const SetupScheduleTable = () => {
	const [pickedDiscipline, setPickedDiscipline] = useState<{ teachers: ITeacher[]; isOpen: boolean }>({
		teachers: [],
		isOpen: false,
	});

	const dispatch = useDispatch();

	const lessons = useTypedSelector((state) => state.formCollector.additionalLessons);

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
									<UserSelectIndicator lessonName={lesson.name} />
								</TableStyledCell>
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
