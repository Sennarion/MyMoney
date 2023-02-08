import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/selectors';
import { selectCategories } from 'redux/transactions/selectors';
import { selectIsLoading } from 'redux/global/selectors';
import IconButton from 'components/UI/IconButton/IconButton';
import { MdOutlineDelete } from 'react-icons/md';
import { deleteTransaction } from 'redux/transactions/operations';

export default function MobileTransactionsTable() {
  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  const matchCategory = categoryId => {
    return categories.find(category => category.id === categoryId).name;
  };

  return (
    <ul>
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
            <li key={id}>
              <ul>
                <li>
                  <span>Date</span>
                  <span>{transactionDate}</span>
                </li>
                <li>
                  <span>Type</span>
                  <span>{amount > 0 ? '+' : '-'}</span>
                </li>
                <li>
                  <span>Category</span>
                  <span>{matchCategory(categoryId)}</span>
                </li>
                <li>
                  <span>Comment</span>
                  <span>{comment}</span>
                </li>
                <li>
                  <span>Sum</span>
                  <span>{amount}</span>
                </li>
                <li>
                  <span>Balance</span>
                  <span>{balanceAfter}</span>
                </li>
                <li>
                  <IconButton
                    type="button"
                    disabled={isLoading}
                    onClick={() => dispatch(deleteTransaction(id))}
                  >
                    <MdOutlineDelete size={20} />
                  </IconButton>
                </li>
              </ul>
            </li>
          )
        )}
    </ul>
  );
}
