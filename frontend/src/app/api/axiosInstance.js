import axios from 'axios';
import {BEARER_TOKEN} from '../constants';

const bearer = localStorage.getItem(BEARER_TOKEN);

const axiosAbort = axios.CancelToken.source();
const axiosInstance = axios.create({
  headers: { Authorization: 'Bearer ' + bearer },
  cancelToken: axiosAbort.token
});

export const getAxiosInstance = ()=> {
        axiosInstance.defaults.headers.Authorization = 'Bearer '+ localStorage.getItem(BEARER_TOKEN);
        axiosInstance.defaults.cancelToken = axiosAbort.token;
        return axiosInstance;
};