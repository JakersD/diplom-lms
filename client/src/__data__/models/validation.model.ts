export enum EValidationType {
	IS_REQUIRED = 'IS_REQUIRED',
	MIN_LENGTH = 'MIN_LENGTH',
}

export type TValidationValue = string | number | undefined;

export interface IValidationType {
	type: EValidationType;
	value?: TValidationValue;
}
