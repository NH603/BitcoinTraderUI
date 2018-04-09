import initialState from './initialState';
import { SET_QUOTE } from '../actions/actionTypes';

export default function quote(state = initialState.quote, action) {
  switch (action.type) {
    case SET_QUOTE:
      return action.payload;
    default:
      return state;
  }
}