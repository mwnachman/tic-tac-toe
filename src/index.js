import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import allReducers from './reducers';

import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';

import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const store = createStore(allReducers, composeWithDevTools(
  applyMiddleware(
    loggerMiddleware
  )
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
 