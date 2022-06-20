import React from 'react';
import { Box, CircularProgress, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { Container, TableStyledCell } from '../../../../components';
import { useTypedSelector } from '../../../../__data__/hooks';
import { SMainButton, STextLG } from '../../Main.style';
import { generateKey } from '../../../../__data__/utils';
import { arrowRight24 } from '../../../../icons';

interface IProps {
	title: string;
	setFamil: React.Dispatch<React.SetStateAction<boolean>>;
}

const LessonListDisciplines: React.FC<IProps> = ({ title, setFamil }) => {
	const lessons = useTypedSelector((state) => state.user.data?.groupId.lessonsIds);

	const handleSubmit = () => {
		setFamil(true);
	};

	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'fit-content' }}>
				<Container width='670px' maxHeight='448px' margin='0 0 10px 0'>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<STextLG padding='0'>{title}</STextLG>
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
									<TableStyledCell>Дисциплина</TableStyledCell>
									<TableStyledCell padding='checkbox'></TableStyledCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{lessons?.map((lesson, i) => (
									<TableRow key={generateKey(String(i))} style={{ cursor: 'pointer' }}>
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
				<SMainButton margin='24px 0 0 0' style={{ alignSelf: 'flex-end' }} onClick={handleSubmit}>
					Далее
				</SMainButton>
			</div>
		</div>
	);
};

export default LessonListDisciplines;
