import { USER_LOG_IN, USER_LOG_OUT } from './types';
import { authApi } from '../../api/authApi';
export const login = (userCredentials) => (dispatch) =>
  authApi.login(userCredentials).then((res) => {
    localStorage.setItem('DFA_USER_TOKEN', res.token);
    localStorage.setItem('DFA_USER', JSON.stringify(res.user));
    dispatch({ type: USER_LOG_IN, payload: res.user });
  });

export const logout = (dispatch) => () =>
{authApi.logout().then((res) => {
    localStorage.removeItem('DFA_USER_TOKEN');
    localStorage.removeItem('DFA_USER');
    dispatch({ type: USER_LOG_OUT, payload: res });
  });
}



