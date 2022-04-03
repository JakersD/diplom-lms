import { storageName } from '../models';

export const getAuthToken = (): string | null => {
	const data = JSON.parse(localStorage.getItem(storageName) as string);

	if (data?.token) {
		return data.token;
	}

	return null;
};

export const logout = () => {
	localStorage.removeItem(storageName);
};
