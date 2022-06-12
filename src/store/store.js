import { createStore, combineReducers } from 'redux';
import buses from '../reducers/buses';
import search from '../reducers/search';
import details from '../reducers/details';
import handleBus from '../reducers/handleBus'

const reducers = combineReducers({ search, buses, details, handleBus });
export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//export default store;