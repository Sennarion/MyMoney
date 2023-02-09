import { useSelector } from 'react-redux';
import { selectIsAuthLoading } from 'redux/auth/selectors';
import { selectIsTransactionsLoading } from 'redux/transactions/selectors';
import { Btn } from './Button.styled';

export default function Button({ children, ...props }) {
  const isAuthLoading = useSelector(selectIsAuthLoading);
  const isTransactionsLoading = useSelector(selectIsTransactionsLoading);

  const isLoading = isAuthLoading || isTransactionsLoading;

  return (
    <Btn disabled={isLoading} {...props}>
      {children}
    </Btn>
  );
}
