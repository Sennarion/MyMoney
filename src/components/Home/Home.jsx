import { useSelector } from 'react-redux';
import { selectModalAddTransactionOpen } from 'redux/global/selectors';
import useMediaQuery from 'hooks/useMediaQuery';
import Balance from 'components/Balance/Balance';
import { HomeWrapper } from './Home.styled';
import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import DesktopTransactionsTable from 'components/DesktopTransactionsTable/DesktopTransactionsTable';
import MobileTransactionsTable from 'components/MobileTransactionsTable/MobileTransactionsTable';
import Portal from 'components/UI/Portal/Portal';

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
