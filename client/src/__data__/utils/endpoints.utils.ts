import axios from 'axios';
import { EEndpoints } from '../models/endpoints.model';

export const getFromServer = (endpoint: EEndpoints) => axios.get(endpoint);

interface IPostBody {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[x: string]: any;
}
export const postToServer = (endpoint: EEndpoints, body: IPostBody) =>
	axios.post(endpoint, body).catch((error) => {
		throw error.response.data;
	});
