import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SIndicator } from '../../../../components/LessonsList/SelectIndicator.style';
import { useTypedSelector } from '../../../../__data__/hooks';
import { addSuccessfulPicked } from '../../../../__data__/middlewares';

const calculateState = (state: Array<boolean>) => state.filter((v) => v).length;

interface IProps {
	lessonName: string;
}

const amount = 2;

const UserSelectIndicator: React.FC<IProps> = ({ lessonName }) => {
	const [isSuccess, setIsSuccess] = useState(false);
	const [picked, setPicked] = useState<Array<boolean>>([]);

	const dispatch = useDispatch();

	const userSchedule = useTypedSelector((state) => state.formCollector.userSchedule);

	useEffect(() => {
		const a: Array<boolean> = [];
		userSchedule.forEach((v) => {
			v.lessonName === lessonName ? a.push(true) : '';
		});
		setPicked(a);

		if (calculateState(a) >= amount) {
			setIsSuccess(true);
		} else {
			setIsSuccess(false);
		}
	}, [userSchedule]);

	return <SIndicator isSuccess={isSuccess}>{`${calculateState(picked)}/${amount}`}</SIndicator>;
};

export default UserSelectIndicator;
