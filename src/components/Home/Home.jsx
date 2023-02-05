import { useSelector } from 'react-redux';
import {
  selectModalAddTransactionOpen,
  selectModalUpdateTransactionOpen,
} from 'redux/global/selectors';
import useMediaQuery from 'hooks/useMediaQuery';
import Balance from 'components/Balance/Balance';
import { HomeWrapper } from './Home.styled';
import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalUpdateTransaction from 'components/ModalUpdateTransaction/ModalUpdateTransaction';
import DesktopTransactionsTable from 'components/DesktopTransactionsTable/DesktopTransactionsTable';
import Portal from 'components/UI/Portal/Portal';

export default function Home() {
  const isModalAddTransactionOpen = useSelector(selectModalAddTransactionOpen);
  const isModalUpdateTransactionOpen = useSelector(
    selectModalUpdateTransactionOpen
  );

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <HomeWrapper>
      {isMobile && <Balance />}
      {!isMobile && <DesktopTransactionsTable />}
      <ButtonAddTransaction />
      <Portal isVisible={isModalAddTransactionOpen}>
        <ModalAddTransaction />
      </Portal>
      <Portal isVisible={isModalUpdateTransactionOpen}>
        <ModalUpdateTransaction />
      </Portal>
    </HomeWrapper>
  );
}
