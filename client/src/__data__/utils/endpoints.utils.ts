import axios from 'axios';
import { EEndpoints } from '../models/endpoints.model';

const getProtectedConfig = (token: string) => {
	return {
		headers: {
			Authorization: 'Bearer ' + token,
		},
	};
};

export const getFromServer = (endpoint: EEndpoints) => axios.get(endpoint);

export const protectedGetFromServer = (endpoints: EEndpoints, token: string) =>
	axios.get(endpoints, getProtectedConfig(token));

interface IPostBody {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[x: string]: any;
}
export const postToServer = (endpoint: EEndpoints, body: IPostBody) =>
	axios.post(endpoint, body).catch((error) => {
		throw error.response.data;
	});
