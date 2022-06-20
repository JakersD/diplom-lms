import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../../__data__/hooks';
import UserSetupSchedule from '../Schedule/UserSetupSchedule';
import ChoiseDisciplines from './ChoiseDisciplines';

const Picker: React.FC = () => {
	const [isPicked, setIsPicked] = useState(false);

	const lessons = useTypedSelector((state) => state.user.data?.lessonsIds);

	useEffect(() => {
		if (!isEmpty(lessons)) {
			setIsPicked(true);
		}
	}, []);

	if (!isEmpty(lessons) || isPicked) {
		return <UserSetupSchedule />;
	}

	return <ChoiseDisciplines setIsPicked={setIsPicked} />;
};

export default Picker;
