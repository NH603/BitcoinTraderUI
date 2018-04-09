import React from 'react';
import './Trader.css';

const Trader = ({ quote, purchaseAmount, handleAmountChange, onTrade }) => (
  <div className="title-wrapper">
    <div className="trader-title">Trade</div>
    <input className="input" type="text" readOnly={true} value="USD" />
    <input
      className="input"
      type="text"
      placeholder="Enter Your Amount"
      value={purchaseAmount === '0' ? '' : purchaseAmount}
      onChange={handleAmountChange}
    />

    <div className="trader-title">For</div>
    <input className="input" type="text" readOnly={true} value="BTC" />
    <input
      className="input"
      type="text"
      readOnly={true}
      value={quote === 0 ? 'Display Quote' : quote}
    />

    <div className="trade-button" onClick={onTrade}> Trade </div>
  </div>
);

export default Trader;
