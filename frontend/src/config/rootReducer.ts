import user from '../app/components/login/reducer';
import { combineReducers } from 'redux';
import HeaderFooter from '../app/routes/secured_routes/reducer';
import moduleData from '../app/components/module/reducer';
import userProgress from '../app/components/user/reducer';
const rootReducer = combineReducers({ user, HeaderFooter, moduleData, userProgress });
export default rootReducer;
