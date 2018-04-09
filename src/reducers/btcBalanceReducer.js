import initialState from './initialState';
import { SET_BTC_BALANCE } from '../actions/actionTypes';

export default function btcBalance(state = initialState.btc, action) {
  switch (action.type) {
    case SET_BTC_BALANCE:
      return action.payload;
    default:
      return state;
  }
}
