import React from 'react';
import ReactDOM from 'react-dom';
// import MyComponent from "./App";
import App from './App';
import store from '../config/store.ts';
import { Provider } from 'react-redux';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
