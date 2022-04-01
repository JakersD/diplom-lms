import { IUseInputHook } from '../hooks/useInput';
import { EValidationType, IValidationType, TValidationValue } from '../models';

export interface IValidation {
	error: boolean;
	helperText: string;
}

const isRequired = (value: string): IValidation | null => {
	if (value.length === 0) {
		return {
			error: true,
			helperText: 'Поле является обязательным',
		};
	}
	return null;
};

const minLenght = (value: string, length: TValidationValue) => {
	if (length) {
		if (value.length < Number(length)) {
			return {
				error: true,
				helperText: 'Поле мала букав',
			};
		}
	}
	return null;
};

export const getValidation = (value: string, validations: Array<IValidationType>): IValidation | null => {
	const validationError = validations.map((validator) => {
		switch (validator.type) {
			case EValidationType.IS_REQUIRED:
				return isRequired(value);
			case EValidationType.MIN_LENGTH:
				return minLenght(value, validator.value);
			default:
				return null;
		}
	});

	return validationError.filter((v) => v !== null)[0];
};

export const checkValidation = (...inputs: Array<IUseInputHook>) => {
	let error = false;
	inputs.forEach((input) => {
		if (input.validation) {
			const valid = getValidation(input.value, input.validation);

			if (valid) {
				input.fn.setValidationError(valid);
				error = true;
			}
		}
	});
	if (error) {
		throw 'Ошибка валидации';
	}
};
