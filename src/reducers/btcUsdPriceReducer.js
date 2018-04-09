import initialState from './initialState';
import { FETCH_PRICE_SUCCESS,} from '../actions/actionTypes';

export default function btcUsdPrice(state = initialState.btcUsdPrice, action) {
  switch (action.type) {
    case FETCH_PRICE_SUCCESS:
      return action.price;
    default:
      return state;
  }
}