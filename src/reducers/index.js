import { combineReducers } from 'redux';
import profile from './reducer_profile';
import slides from './reducer_slides';

const rootReducer = combineReducers({
  profile,
  slides
});

export default rootReducer;