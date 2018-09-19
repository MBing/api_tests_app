import { createStore } from 'redux';
import rootReducer from '../reducers';

let index = createStore(rootReducer);
