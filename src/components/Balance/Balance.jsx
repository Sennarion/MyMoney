import BalanceNumber from 'components/BalanceNumber/BalanceNumber';
import { BalanceWrapper, Desc} from './Balance.styled';

export default function Balance() {
  return (
    <BalanceWrapper>
      <Desc>My balance</Desc>
      <BalanceNumber/>      
    </BalanceWrapper>
  );
}
