import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';

import { CalendarPicker } from '@mui/x-date-pickers';
import { SDetail, SModal } from './DetailsHorizontal.style';
import { arrowDown24 } from '../../icons';
import { useOnClickOutside } from '../../__data__/hooks';
import { useDispatch } from 'react-redux';
import { changeEndPick, changeEndSem, changeStartPick, changeStartSem } from '../../__data__/middlewares';

interface IProps {
	isStart: boolean;
	isPick: boolean;
	level: number;
}

const Modal: React.FC<IProps> = ({ isStart, level, isPick }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [date, setDate] = useState<Date>(new Date());

	const dispatch = useDispatch();

	useEffect(() => {
		if (isPick) {
			isStart ? dispatch(changeStartPick(level, date)) : dispatch(changeEndPick(level, date));
		} else {
			isStart ? dispatch(changeStartSem(level, date)) : dispatch(changeEndSem(level, date));
		}
	}, [date]);

	const menuRef = useRef(null);

	useOnClickOutside(menuRef, () => {
		setIsOpen(false);
	});

	const handleModalClick = () => setIsOpen(!isOpen);

	return (
		<>
			<div style={{ position: 'relative' }}>
				<div style={{ display: 'flex', cursor: 'pointer' }} onClick={handleModalClick}>
					<SDetail style={{ marginRight: '10px' }}>{format(date, 'dd.MM.yyyy')}</SDetail>
					<img src={arrowDown24} alt='Стрелка' />
				</div>
				<SModal isOpen={isOpen} ref={menuRef}>
					<CalendarPicker date={date} onChange={(newDate) => setDate(newDate as Date)} />
				</SModal>
			</div>
		</>
	);
};

export default Modal;
