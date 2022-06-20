import React from 'react';
import { compareAsc } from 'date-fns';
import { useTypedSelector } from '../../../__data__/hooks';
import ClassesNotStarted from './ClassesNotStarted/ClassesNotStarted';
import Picker from './Picker/Picker';
import { isEmpty } from 'lodash';
import DoneSchedule from './DoneSchedule';

const StudentStatusComponent: React.FC = () => {
	const timePick = useTypedSelector((state) => state.user.data?.facultyId.pickDates);
	const level = useTypedSelector((state) => state.user.data?.groupId.level);
	const schedule = useTypedSelector((state) => state.user.data?.schedule);

	if (!isEmpty(schedule)) {
		return <DoneSchedule />;
	}

	if (timePick && level) {
		const dateA = new Date().setHours(0, 0, 0, 0);
		const dateB = new Date(timePick[level].dateStartPick).setHours(0, 0, 0, 0);

		if (compareAsc(dateA, dateB) === -1) {
			return <ClassesNotStarted />;
		} else {
			return <Picker />;
		}
	}

	return <div></div>;
};

export default StudentStatusComponent;
