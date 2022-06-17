export const generateKey = (pre: string): string => {
	return `${pre}_${new Date().getTime()}`;
};

export const getSemester = (): string => (new Date().getMonth() + 1 >= 5 ? '1' : '2');
