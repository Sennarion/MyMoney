import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'redux/transactions/selectors';
import { selectIsTransactionsLoading } from 'redux/transactions/selectors';
import { deleteTransaction } from 'redux/transactions/operations';
import {
  TransactionItem,
  TransactionInfoList,
  TransactionInfoItem,
  TransactionLabel,
  TransactionAmount,
} from './MobileTransactionItem.styled';
import IconButton from 'components/UI/IconButton/IconButton';
import { MdOutlineDelete } from 'react-icons/md';
import format from 'date-fns/format';

export default function MobileTransactionItem({
  transaction: {
    id,
    amount,
    transactionDate,
    comment,
    categoryId,
    balanceAfter,
  },
}) {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsTransactionsLoading);

  const matchCategory = categoryId => {
    return categories.find(category => category.id === categoryId).name;
  };

  return (
    <>
      {categories.length > 0 && (
        <TransactionItem>
          <TransactionInfoList>
            <TransactionInfoItem positive={amount > 0}>
              <TransactionLabel>Date</TransactionLabel>
              <span>{format(new Date(transactionDate), 'dd.MM.yyyy')}</span>
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
      )}
    </>
  );
}
