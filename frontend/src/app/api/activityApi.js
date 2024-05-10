import 	{ getAxiosInstance } from './axiosInstance';
import { api, activityApiUrl, users_api } from '../constants';


export const activityApi = {
	get: (userId, activityData) => {
		return getAxiosInstance()
			.post(api + activityApiUrl + `${userId}`, activityData)
			.then((res) => {
				return res.data.data;
			});
	},
	delete: (userId, moduleId, data) => {
		return getAxiosInstance().put(api + users_api + userId + '/activity/delete/', data).then((res) => {
			return res.data;
		});
	},
	getUserData: (userId) => {
		return getAxiosInstance()
			.get(api + activityApiUrl + `${userId}`)
			.then((res) => {
				return res.data;
			});
	}
};
