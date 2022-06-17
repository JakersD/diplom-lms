export interface IDatePick {
	level?: {
		dateStartPick?: Date;
		dateEndPick?: Date;
		dateStartSem?: Date;
		dateEndSem?: Date;
	};
}

export interface IFormCollectorInitial {
	datePick: Array<IDatePick> | [];
}
