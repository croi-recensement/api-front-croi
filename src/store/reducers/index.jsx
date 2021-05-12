import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import Person from './Person';

const reducers = { Person };

export const Reducer = combineReducers({ ...reducers, form: formReducer });