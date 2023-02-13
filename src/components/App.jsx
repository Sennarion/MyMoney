import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from 'hooks/useMediaQuery';
import {
  selectIsRefreshCurrentUser,
  selectIsLoggedIn,
} from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { getCategories, getTransactions } from 'redux/transactions/operations';
import { Home, Diagram, Currency, Loader } from 'components';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCategories());
      dispatch(getTransactions());
    }
  }, [dispatch, isLoggedIn]);

  const isDesktop = useMediaQuery('(min-width: 1280px)');

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
                {!isDesktop && <Route path="currency" element={<Currency />} />}
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
