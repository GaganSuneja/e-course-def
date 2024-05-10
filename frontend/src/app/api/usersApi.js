import { api, users_api } from '../constants';
import {getAxiosInstance} from './axiosInstance';

export const usersApi = {
  update: (userId,userData) => {
    return getAxiosInstance()
      .put(api + users_api + userId,userData)
      .then((res) => {
        return res.data;
      });
  },
  add: (user) => {
    return getAxiosInstance()
      .post(api + users_api, user)
      .then((res) => {
        return res.data;
      });
  },
  remove: (userId) => {
    return getAxiosInstance().delete(api + users_api + userId).then((res) => {
      return res.status;
    });
  },
  create: (user) => {
    return getAxiosInstance().post(api + users_api, user).then((res) => {
      return res.data;
    });
  },
  getAllUsers: async (query) => {
    try {
      const { data } = await getAxiosInstance().get(api + users_api + '?' + query);
      return data['data'];
    } catch (error) {
    }
  },
  getSingleUser: (id) => {
    return getAxiosInstance().get(api + users_api + id).then((res) => {
      return res.data;
    });
  },
  abortApi: () => {
    axiosAbort.cancel();
  },
  getUsersCount: () => {
    return getAxiosInstance().get(api + users_api + '/count').then((res) => {
      return res.data.data['usersCount'];
    });
  }
};
