import { DISABLE_FOOTER, DISABLE_HEADER } from './types';
const initialState = {
  showHeader: true,
  showFooter: true,
};

const HeaderFooter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DISABLE_HEADER: {
      return { ...state, showHeader: false };
    }
    case DISABLE_FOOTER: {
      return { ...state, showFooter: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default HeaderFooter;
