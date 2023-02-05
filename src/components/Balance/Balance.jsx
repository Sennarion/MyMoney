import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/global/selectors';
import { BalanceWrapper, Desc, BalanceStatus } from './Balance.styled';
import { formatCurrency } from 'utils/formatCurrency';

export default function Balance() {
  const balance = useSelector(selectBalance);
  return (
    <BalanceWrapper>
      <Desc>My balance</Desc>
      <BalanceStatus>₴ {formatCurrency(balance)}</BalanceStatus>
    </BalanceWrapper>
  );
}
