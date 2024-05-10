import { USER_LOG_IN, USER_LOG_OUT, SET_USER_PROGRESS} from './types';
const initialState = {
  userLoggedIn: !!localStorage.getItem('DFA_USER_TOKEN'),
  userProfile: JSON.parse(localStorage.getItem('DFA_USER') || '{}')
};
const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOG_IN: {
      console.log('value of state',state);
      return { userLoggedIn: true, userProfile: payload };
    }
    case USER_LOG_OUT: {
      return {userLoggedIn: false, userProfile: null};
    }
    case SET_USER_PROGRESS: {
      return {...state}
    }
    default: {
      return { ...state };
    }
  }
};
export default user;
