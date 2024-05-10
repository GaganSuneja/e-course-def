import { STATUS, MODULE_STATUS_INCOMPLETE, MODULE_ID } from '../../constants';

const initialState = {
  0: {
    isComplete: true
  }
};

const moduleData = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MODULE_STATUS_INCOMPLETE:
      state[payload[MODULE_ID]] = payload[STATUS];
      return state;
    default:
      return state;
  }
};

export default moduleData;