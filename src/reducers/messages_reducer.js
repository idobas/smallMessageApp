import {FETCH_MESSAGES, FETCH_MESSAGE} from '../actions/index';

const INITIAL_STATE = {
  all: [],
  currentMessage: null
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_MESSAGES:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
};
