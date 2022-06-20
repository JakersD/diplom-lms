import React, { useEffect } from 'react';
import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Container, TableStyledCell } from '../../../../components';
import { SMainButton, SMainContainer, SMainWrapper, STextLG } from '../../Main.style';
import { useTypedSelector } from '../../../../__data__/hooks';
import { generateKey } from '../../../../__data__/utils';
import { getLessonSetStatus } from './utils';
import { arrowRight24 } from '../../../../icons';
import { getProfile } from '../../../../__data__/middlewares';
import { useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';

const GroupLessons = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const groups = useTypedSelector((state) => state.user.data?.facultyId.groupIds);
	const facultyName = useTypedSelector((state) => state.user.data?.facultyId.shortName);

	useEffect(() => {
		dispatch(getProfile());
	}, []);

	const handleRowClick = (name: string, id: string, level: number, facultyName: string) => {
		navigate('/disciplines', { state: { level, facultyName, groupName: name, groupId: id } });
	};

	const handleSubmitClick = () => navigate('/schedule');

	return (
		<SMainWrapper>
			<SMainContainer>
				{groups?.some((group) => isEmpty(group.lessonsIds)) ? (
					<STextLG>Направления для установки обязательных предметов</STextLG>
				) : (
					<STextLG>{'Всё готово, можете установить расписание'}</STextLG>
				)}
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'fit-content' }}
				>
					<Container>
						<Table sx={{ minWidth: 830, maxHeight: 382, overflowY: 'scroll' }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableStyledCell>Направление</TableStyledCell>
									<TableStyledCell>Курс</TableStyledCell>
									<TableStyledCell>Статус</TableStyledCell>
									<TableStyledCell padding='checkbox'></TableStyledCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{groups?.map((group, i) => (
									<TableRow
										key={generateKey(String(i))}
										style={{ cursor: 'pointer' }}
										onClick={() =>
											handleRowClick(group.name, group._id, group.level, facultyName || '')
										}
									>
										<TableStyledCell>{group.name}</TableStyledCell>
										<TableStyledCell>{group.level}</TableStyledCell>
										<TableStyledCell>{getLessonSetStatus(group.lessonsIds)}</TableStyledCell>
										<TableStyledCell padding='checkbox'>
											<img src={arrowRight24} alt='Стрелка вправо' />
										</TableStyledCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Container>
					{groups?.some((group) => isEmpty(group.lessonsIds)) ? (
						<></>
					) : (
						<SMainButton margin='32px 0 0 0' style={{ alignSelf: 'flex-end' }} onClick={handleSubmitClick}>
							Далее
						</SMainButton>
					)}
				</div>
			</SMainContainer>
		</SMainWrapper>
	);
};

export default GroupLessons;
