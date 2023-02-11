import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/selectors';
import { MobileTransactionItem } from 'components';
import { TransactionsList } from './MobileTransactionsTable.styled';

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
