import {
  SET_RAW,
  SET_FILTER,
} from '../constants/ActionTypes';

const initialState = {
  someItem: 'foo',
  raw: [],
};

export default function coreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RAW:
      return state;
    case SET_FILTER:
      return state;
    default:
      return state;
  }
}
