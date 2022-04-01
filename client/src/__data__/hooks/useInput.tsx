import React, { useState } from 'react';

import { IValidationType } from '../models';
import { getValidation, IValidation } from '../utils';

export interface IUseInputHook {
	value: string;
	name: string;
	error: boolean;
	helperText: string;
	validation?: Array<IValidationType>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	fn: {
		setValidationError: (valid: IValidation) => void;
	};
}

export const useInput = (name: string, validation?: Array<IValidationType>): IUseInputHook => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const [helperText, setHelperText] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const setValidationError = (valid: IValidation): void => {
		setError(valid.error);
		setHelperText(valid.helperText);
	};

	const setNoValidationError = (): void => {
		setError(false);
		setHelperText('');
	};

	const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (validation) {
			const valid = getValidation(e.target.value, validation);

			if (valid) {
				setValidationError(valid);
			} else {
				setNoValidationError();
			}
		}
	};

	return { value, name, error, helperText, validation, onChange, onBlur, fn: { setValidationError } };
};
