import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/selectors';
import { TransactionsList } from './MobileTransactionsTable.styled';
import MobileTransactionItem from 'components/MobileTransactionItem/MobileTransactionItem';

export default function MobileTransactionsTable() {
  const transactions = useSelector(selectTransactions);

  return (
    <TransactionsList>
      {transactions.length > 0 &&
        transactions.map(transaction => (
          <MobileTransactionItem
            transaction={transaction}
            key={transaction.id}
          />
        ))}
    </TransactionsList>
  );
}
