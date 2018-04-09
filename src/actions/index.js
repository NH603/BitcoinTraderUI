import axios from 'axios';
import {
  FETCH_PRICE_SUCCESS,
  FETCH_PRICE_REQUEST,
  FETCH_PRICE_FAILURE,
  SET_PURCHASE_AMOUNT,
  SET_QUOTE,
  SET_BTC_BALANCE,
  SET_USD_BALANCE,

} from './actionTypes';

const BTC_USD_PRICE_API = 'https://api.bitfinex.com/v1/pubticker/btcusd';

export const fetchPrice = () => dispatch => {
  dispatch({ type: FETCH_PRICE_REQUEST });
  return axios
    .get(BTC_USD_PRICE_API)
    .then(res => Number(res.data.last_price))
    .then(price => dispatch({ price, type: FETCH_PRICE_SUCCESS }))
    .catch(e => dispatch({ type: FETCH_PRICE_FAILURE }));
};

export const setPurchaseAmount = amount => ({
  type: SET_PURCHASE_AMOUNT,
  payload: amount,
});

export const setQuote = quote => ({
  type: SET_QUOTE,
  payload: quote,
});


export const setBtcBalance = btcBalance => ({
  type: SET_BTC_BALANCE,
  payload: btcBalance,
});

export const setUsdBalance = usdBalance => ({
  type: SET_USD_BALANCE,
  payload: usdBalance,
});
