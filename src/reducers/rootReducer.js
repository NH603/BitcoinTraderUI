import {combineReducers} from 'redux';
import btcBalance from './btcBalanceReducer';
import usdBalance from './usdBalanceReducer';
import btcUsdPrice from './btcUsdPriceReducer';
import purchaseAmount from './purchaseAmountReducer';
import quote from './quoteReducer';


const rootReducer = combineReducers({
  btcBalance,
  usdBalance,
  btcUsdPrice,
  purchaseAmount,
  quote,
});

export default rootReducer;