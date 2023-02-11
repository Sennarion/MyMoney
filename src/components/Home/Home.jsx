import { useSelector } from 'react-redux';
import useMediaQuery from 'hooks/useMediaQuery';
import { selectModalAddTransactionOpen } from 'redux/global/selectors';
import {
  Balance,
  ButtonAddTransaction,
  ModalAddTransaction,
  DesktopTransactionsTable,
  MobileTransactionsTable,
  Portal,
} from 'components';
import { HomeWrapper } from './Home.styled';

export default function Home() {
  const isModalAddTransactionOpen = useSelector(selectModalAddTransactionOpen);
  const isMobile = useMediaQuery('(min-width: 768px)');

  return (
    <HomeWrapper>
      {!isMobile && <Balance />}
      {isMobile ? <DesktopTransactionsTable /> : <MobileTransactionsTable />}
      <ButtonAddTransaction />
      <Portal isVisible={isModalAddTransactionOpen}>
        <ModalAddTransaction />
      </Portal>
    </HomeWrapper>
  );
}
