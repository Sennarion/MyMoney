import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { Container } from 'components/UI/Container/Container.styled';
import { BgWrapper, Content } from './HomePage.styled';
import Header from 'components/Header/Header';
import Aside from 'components/Aside/Aside';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation';
import useMediaQuery from 'hooks/useMediaQuery';
import { selectSuccessfulTransaction } from 'redux/transactions/selectors';
import { selectTransactionErrorStatus } from 'redux/transactions/selectors';

function HomePage() {
  const successfulTransaction = useSelector(selectSuccessfulTransaction);
  const transactionErrorStatus = useSelector(selectTransactionErrorStatus);

  useEffect(() => {
    if (successfulTransaction) {
      toast.info('The transaction was successfully added to the list');
    }
  }, [successfulTransaction]);

  useEffect(() => {
    if (transactionErrorStatus) {
      toast.error(`${transactionErrorStatus}`);
    }
  }, [transactionErrorStatus]);

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <BgWrapper>
      <Header />
      <Container>
        <Content>
          {isMobile ? <MobileNavigation /> : <Aside />}
          <Outlet />
        </Content>
      </Container>
    </BgWrapper>
  );
}

export default WithAuthRedirect(HomePage, '/login');
