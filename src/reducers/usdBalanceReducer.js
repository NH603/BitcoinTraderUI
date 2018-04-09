import initialState from './initialState';
import { SET_USD_BALANCE } from '../actions/actionTypes';


export default function usdBalance(state = initialState.usd, action) {
  switch (action.type) {
    case SET_USD_BALANCE:
      return action.payload;
    default:
      return state;
  }
}