import React from 'react';

import { EStatus } from '../../__data__/models';
import SemDates from './admin/SemDates/SemDates';
import PickSem from './admin/PickDates/PickDates';
import { GroupLessons } from './admin';

export const renderStatusPage = (status: EStatus | undefined): JSX.Element => {
	switch (status) {
		case EStatus.pick:
			return <PickSem />;
		case EStatus.sem:
			return <SemDates />;
		case EStatus.lessons:
			return <GroupLessons />;

		default:
			return <p>ЧО ТУТА</p>;
	}
};
