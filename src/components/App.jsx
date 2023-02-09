import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { selectAuthErrorStatus } from 'redux/auth/selectors';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import Home from './Home/Home';
import Diagram from './Diagram/Diagram';
import Currency from './Currency/Currency';
import { selectIsRefreshCurrentUser } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import useMediaQuery from 'hooks/useMediaQuery';
import Loader from './UI/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { getCategories, getTransactions } from 'redux/transactions/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectSuccessfulTransaction } from 'redux/transactions/selectors';
import { selectTransactionErrorStatus } from 'redux/transactions/selectors';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isTablet = useMediaQuery('(min-width: 768px)');

  const isRefreshing = useSelector(selectIsRefreshCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authErrorStatus = useSelector(selectAuthErrorStatus);
  const successfulTransaction = useSelector(selectSuccessfulTransaction);
  const transactionErrorStatus = useSelector(selectTransactionErrorStatus);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCategories());
      dispatch(getTransactions());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (authErrorStatus) {
      toast.error(`${authErrorStatus}`);
    }
  }, [authErrorStatus]);

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

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />}>
                <Route index element={<Home />} />
                <Route path="diagram" element={<Diagram />} />
                {!isTablet && <Route path="currency" element={<Currency />} />}
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <GlobalStyleComponent />
          <ToastContainer
            autoClose={2000}
            hideProgressBar={true}
            position="bottom-left"
          />
        </>
      )}
    </>
  );
};
