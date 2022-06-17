import React, { useEffect, useState } from 'react';
import { SIndicator } from './SelectIndicator.style';

interface IProps {
	state: Array<boolean>;
	amount: number;
}

const SelectIndicator: React.FC<IProps> = ({ state, amount }): JSX.Element => {
	const [isSuccess, setIsSuccess] = useState(false);

	useEffect(() => {
		if (calculateState(state) === amount) {
			setIsSuccess(true);
		} else {
			setIsSuccess(false);
		}
	}, [state]);

	const calculateState = (state: Array<boolean>) => state.filter((v) => v).length;

	return <SIndicator isSuccess={isSuccess}>{`${calculateState(state)}/${amount}`}</SIndicator>;
};

export default SelectIndicator;
