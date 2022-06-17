import React from 'react';

import { isEmpty } from 'lodash';
import { ILesson } from '../../../../__data__/models';
import { SFailureStatus, SSuccessStatus } from './GrouoLessons.style';

export const getLessonSetStatus = (lessonsIds: Array<ILesson> | null): JSX.Element => {
	if (isEmpty(lessonsIds)) {
		return <SFailureStatus>Не установлено</SFailureStatus>;
	}
	return <SSuccessStatus>Установлено</SSuccessStatus>;
};
