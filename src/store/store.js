import { createStore, combineReducers } from 'redux';
import buses from '../reducers/buses';
import search from '../reducers/search';
import details from '../reducers/details';
import handleBus from '../reducers/handleBus'

const reducers = combineReducers({ search, buses, details, handleBus });
export const store = createStore(reducers);
