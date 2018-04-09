import React from 'react';
import './Balance.css';

const Balance = ({ label, amount }) => (
  <div className="balance-wrapper">
    <div className="balance-label"> {label}</div>
    <div className="balance-amount"> {amount}</div>
  </div>
);

export default Balance;
