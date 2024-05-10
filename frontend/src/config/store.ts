import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer.ts';
import thunk from 'redux-thunk';
const initialState = {};
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;
