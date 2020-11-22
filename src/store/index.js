import {createStore, combineReducers} from 'redux';
import reducer from './reducers/open';

const rootFunc = combineReducers({open: reducer});
const store = createStore(rootFunc);
export default store;