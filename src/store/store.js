import { createStore, combineReducers } from 'redux';
import buses from '../reducers/buses';
import search from '../reducers/search';
import details from '../reducers/details';

const reducers = combineReducers({ search, buses, details });
export const store = createStore(reducers);
