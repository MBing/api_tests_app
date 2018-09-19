import {
  SLIDES_FETCHED
} from '../actions/actions_slider';

const slides = (state = [], action) => {
  switch (action.type) {
    case SLIDES_FETCHED:
      return action.payload;
    default:
      return state;
  }
};

export default slides;
