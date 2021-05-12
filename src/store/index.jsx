import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Reducer } from './reducers/index';
import logger from 'redux-logger';

const store = createStore(Reducer, applyMiddleware(logger));
  
export default store;