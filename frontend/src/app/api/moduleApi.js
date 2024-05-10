import { api, users_api } from '../constants';
import { getAxiosInstance } from './axiosInstance';

const moduleApi = {
  getModule: (moduleIds, userId) => {
    return getAxiosInstance().post(api + '/module/' + `${userId}/` ,moduleIds).then((res) => res.data.data);
  },
  updateUserProgress: (userId, moduleId, data) => {
    return getAxiosInstance().put(api + users_api + userId + '/progress/' + moduleId, data).then((res) => {
      return res.data.data;
    });
  },
  getUserProgress: (userId, moduleId = 0) => {
    return getAxiosInstance().get(api + users_api + userId + '/progress/' + moduleId).then((res) => {
      return res.data.data;
    });
  }
};

export default moduleApi;
