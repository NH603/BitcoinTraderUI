import initialState from './initialState';
import { SET_PURCHASE_AMOUNT } from '../actions/actionTypes';

export default function purchaseAmount(state = initialState.purchaseAmount, action) {
  switch (action.type) {
    case SET_PURCHASE_AMOUNT:
      return action.payload;
    default:
      return state;
  }
}