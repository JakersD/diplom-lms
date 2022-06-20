import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../__data__/hooks';
import { getStatus } from '../../../__data__/middlewares';
import { renderStatusPage } from '../utils';

const StatusComponent: React.FC = () => {
	const dispatch = useDispatch();

	const status = useTypedSelector((state) => state.general.data?.status);

	useEffect(() => {
		dispatch(getStatus());
	}, []);

	return renderStatusPage(status);
};

export default StatusComponent;
