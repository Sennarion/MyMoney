import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';
import { openModalUpdateTransaction } from 'redux/global/slice';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';
import { MdAutorenew, MdOutlineDelete } from 'react-icons/md';
import { selectIsLoading } from 'redux/global/selectors';
import { deleteTransaction } from 'redux/transactions/operations';
import IconButton from 'components/UI/IconButton/IconButton';
import {
  Table,
  TableHead,
  TableRow,
  TableHeadData,
  TableBodyData,
} from './DesktopTransactionsTable.styled';

export default function DesktopTransactionsTable() {
  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  const matchCategory = categoryId => {
    return categories.find(category => category.id === categoryId).name;
  };

  return (
    <>
      {transactions.length > 0 && categories.length > 0 && (
        <Table>
          <TableHead>
            <tr>
              <TableHeadData>Date</TableHeadData>
              <TableHeadData>Type</TableHeadData>
              <TableHeadData>Category</TableHeadData>
              <TableHeadData>Comment</TableHeadData>
              <TableHeadData>Sum</TableHeadData>
              <TableHeadData>Balance</TableHeadData>
              <TableHeadData></TableHeadData>
              <TableHeadData></TableHeadData>
            </tr>
          </TableHead>
          <tbody>
            {transactions.map(transaction => (
              <TableRow key={transaction.id}>
                <TableBodyData>
                  {format(new Date(transaction.transactionDate), 'dd.MM.yyyy')}
                </TableBodyData>
                <TableBodyData>
                  {transaction.type === 'INCOME' ? '+' : '-'}
                </TableBodyData>
                <TableBodyData>
                  {matchCategory(transaction.categoryId)}
                </TableBodyData>
                <TableBodyData>{transaction.comment}</TableBodyData>
                <TableBodyData>{transaction.amount}</TableBodyData>
                <TableBodyData>{transaction.balanceAfter}</TableBodyData>
                <TableBodyData>
                  <IconButton
                    type="button"
                    onClick={() =>
                      dispatch(openModalUpdateTransaction(transaction))
                    }
                  >
                    <MdAutorenew size={20} />
                  </IconButton>
                </TableBodyData>
                <TableBodyData>
                  <IconButton
                    type="button"
                    disabled={isLoading}
                    onClick={() => dispatch(deleteTransaction(transaction.id))}
                  >
                    <MdOutlineDelete size={20} />
                  </IconButton>
                </TableBodyData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
