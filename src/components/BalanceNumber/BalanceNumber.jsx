import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/global/selectors';
import { formatCurrency } from 'utils/formatCurrency';
import { BalanceStatus } from './BalanceNumber.styled';
const BalanceNumber = () => {
  const balance = useSelector(selectBalance);
  return (
    <BalanceStatus negative={balance < 0}>
      ₴ {formatCurrency(balance)}
    </BalanceStatus>
  );
};

export default BalanceNumber;
