import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/selectors';
import { selectCategories } from 'redux/transactions/selectors';
import { selectIsLoading } from 'redux/global/selectors';
import IconButton from 'components/UI/IconButton/IconButton';
import { MdOutlineDelete } from 'react-icons/md';
import { deleteTransaction } from 'redux/transactions/operations';
import {
  TransactionsList,
  TransactionItem,
  TransactionInfoList,
  TransactionInfoItem,
  TransactionLabel,
  TransactionAmount,
} from './MobileTransactionsTable.styled';

export default function MobileTransactionsTable() {
  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  const matchCategory = categoryId => {
    return categories.find(category => category.id === categoryId).name;
  };

  return (
    <TransactionsList>
      {transactions.length > 0 &&
        transactions.map(
          ({
            id,
            transactionDate,
            categoryId,
            comment,
            amount,
            balanceAfter,
          }) => (
            <TransactionItem key={id}>
              <TransactionInfoList>
                <TransactionInfoItem positive={amount > 0}>
                  <TransactionLabel>Date</TransactionLabel>
                  <span>{transactionDate}</span>
                </TransactionInfoItem>
                <TransactionInfoItem positive={amount > 0}>
                  <TransactionLabel>Type</TransactionLabel>
                  <span>{amount > 0 ? '+' : '-'}</span>
                </TransactionInfoItem>
                <TransactionInfoItem positive={amount > 0}>
                  <TransactionLabel>Category</TransactionLabel>
                  <span>{matchCategory(categoryId)}</span>
                </TransactionInfoItem>
                <TransactionInfoItem positive={amount > 0}>
                  <TransactionLabel>Comment</TransactionLabel>
                  <span>{comment}</span>
                </TransactionInfoItem>
                <TransactionInfoItem positive={amount > 0}>
                  <TransactionLabel>Sum</TransactionLabel>
                  <TransactionAmount positive={amount > 0}>
                    {amount}
                  </TransactionAmount>
                </TransactionInfoItem>
                <TransactionInfoItem positive={amount > 0}>
                  <TransactionLabel>Balance</TransactionLabel>
                  <span>{balanceAfter}</span>
                </TransactionInfoItem>
                <TransactionInfoItem positive={amount > 0}>
                  <IconButton
                    type="button"
                    disabled={isLoading}
                    onClick={() => dispatch(deleteTransaction(id))}
                  >
                    <MdOutlineDelete size={20} />
                  </IconButton>
                </TransactionInfoItem>
              </TransactionInfoList>
            </TransactionItem>
          )
        )}
    </TransactionsList>
  );
}
