import React from 'react';

import { EStatus } from '../../__data__/models';
import SemDates from './admin/SemDates/SemDates';
import PickSem from './admin/PickDates/PickDates';
import { Done, GroupLessons } from './admin';
import ClassesNotStarted from './student/ClassesNotStarted/ClassesNotStarted';

export const renderStatusPage = (status: EStatus | undefined): JSX.Element => {
	switch (status) {
		case EStatus.pick:
			return <PickSem />;
		case EStatus.sem:
			return <SemDates />;
		case EStatus.lessons:
			return <GroupLessons />;
		case EStatus.done:
			return <Done />;
		default:
			return <Done />;
	}
};

export const renderStudentPage = () => {
	return <ClassesNotStarted />;
};
