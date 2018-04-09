import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Balance from '../Balance/Balance';
import Trader from '../Trader/Trader';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchPrice();
  }

  handleAmountChange = ({ target: { value } }) => {
    const { btcUsdPrice, setPurchaseAmount, setQuote } = this.props;

    // don't allow letters
    const purchaseAmount = value.split(/[^\.0-9]+/g).join('');

    // don't allow more than one decimal
    if (purchaseAmount.match(/\./g) && purchaseAmount.match(/\./g).length > 1) {
      return null;
    }

    setPurchaseAmount(purchaseAmount);

    return setQuote(purchaseAmount / btcUsdPrice);
  };

  onTrade = e => {
    e.preventDefault();
    const {
      usdBalance,
      btcBalance,
      purchaseAmount,
      quote,
      setBtcBalance,
      setUsdBalance,
      setPurchaseAmount,
      setQuote,
      fetchPrice,
    } = this.props;

    if (usdBalance < purchaseAmount) {
      return alert('Not Enough Funds');
    }

    setBtcBalance(btcBalance + quote);
    setUsdBalance(usdBalance - purchaseAmount);
    setPurchaseAmount('');
    setQuote(0);
    fetchPrice();
  };

  render() {
    const { btcBalance, usdBalance, purchaseAmount, quote } = this.props;

    return (
      <div className="App">
        <div className="account-balance">Account Balance</div>
        <Balance label="USD" amount={usdBalance} />
        <Balance label="BTC" amount={btcBalance} />
        <Trader
          quote={quote}
          purchaseAmount={purchaseAmount}
          handleAmountChange={this.handleAmountChange}
          onTrade={this.onTrade}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, actions)(App);
