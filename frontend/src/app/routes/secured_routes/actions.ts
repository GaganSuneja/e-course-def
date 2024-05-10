import { DISABLE_FOOTER, DISABLE_HEADER } from './types';

export const disableHeader = () => (dispatch) => {
  dispatch({ type: DISABLE_HEADER});
};

export const disableFooter = () => (dispatch) => {
  dispatch({ type: DISABLE_FOOTER});
};
