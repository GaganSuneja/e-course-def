import axios from 'axios';
import { api } from '../constants';
export const authApi = {
  login: (userCredentials) => {
    return axios.post(api + '/auth/login', userCredentials).then((res) => {
      return res.data;
    });
  },
  forgotPassword: (payload) => {
    return axios.post(api + '/auth/forgotpassword', payload);
  },
  logout: ()=>{
    return axios.get(api+'/auth/logout').then((res)=>{
      return res.data;
    })
  }
};
