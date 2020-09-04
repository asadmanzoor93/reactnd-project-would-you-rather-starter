import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import combineReducers from '../reducers/index';

const loggerMiddleware = createLogger();

export const store = createStore(combineReducers, applyMiddleware(thunkMiddleware, loggerMiddleware));
