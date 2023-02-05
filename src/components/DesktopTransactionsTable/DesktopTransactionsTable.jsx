import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTransactions } from 'redux/transactions/operations';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';
import { deleteTransaction } from 'redux/transactions/operations';
import { selectIsLoading } from 'redux/global/selectors';

export default function DesktopTransactionsTable() {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const matchCategory = categoryId => {
    return categories.find(category => category.id === categoryId).name;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 &&
          transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.type}</td>
              <td>{matchCategory(transaction.categoryId)}</td>
              <td>{transaction.comment}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.balanceAfter}</td>
              <td>
                <button disabled={isLoading}>Update</button>
              </td>
              <td>
                <button
                  disabled={isLoading}
                  onClick={() => dispatch(deleteTransaction(transaction.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
