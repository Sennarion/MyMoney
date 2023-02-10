import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/global/selectors';
import { formatCurrency } from 'utils/formatCurrency';
import { BalanceWrapper, Desc, BalanceStatus } from './Balance.styled';

export default function Balance() {
  const balance = useSelector(selectBalance);

  return (
    <BalanceWrapper>
      <Desc>My balance</Desc>
      <BalanceStatus negative={balance < 0}>
        ₴ {formatCurrency(balance)}
      </BalanceStatus>
    </BalanceWrapper>
  );
}
