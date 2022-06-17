import axios from 'axios';
import { EEndpoints } from '../models/endpoints.model';
import { getAuthToken } from './auth.utils';

interface IBody {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[x: string]: any;
}

const getProtectedConfig = (token: string) => {
	return {
		headers: {
			Authorization: 'Bearer ' + token,
		},
	};
};

export const getFromServer = (endpoint: EEndpoints) => axios.get(endpoint);

export const protectedGetFromServer = (endpoints: EEndpoints) => {
	const token = getAuthToken();

	if (token) {
		return axios.get(endpoints, getProtectedConfig(token));
	}
};

export const protectedPutToServer = async (endpoints: EEndpoints, body: IBody) => {
	const token = getAuthToken();

	if (token) {
		return await axios.put(endpoints, body, getProtectedConfig(token)).catch((error) => {
			throw error.response.data;
		});
	}
};

export const postToServer = (endpoint: EEndpoints, body: IBody) =>
	axios.post(endpoint, body).catch((error) => {
		throw error.response.data;
	});
