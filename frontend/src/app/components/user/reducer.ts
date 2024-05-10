import { GET_USER_PROGRESS} from './types';

const initialState= {};

const userProgress = (state=initialState,action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PROGRESS:
      state[payload['moduleId']] = payload;
      return state;
    default:
      return state;
  }

};

export default userProgress;