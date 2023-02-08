import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';
import { MdOutlineDelete } from 'react-icons/md';
import { selectIsLoading } from 'redux/global/selectors';
import { deleteTransaction } from 'redux/transactions/operations';
import IconButton from 'components/UI/IconButton/IconButton';
import {
  Table,
  TableHead,
  TableRow,
  TableHeadData,
  TableBodyData,
  ColoredData,
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
            </tr>
          </TableHead>
          <tbody>
            {transactions.map(
              ({
                id,
                transactionDate,
                categoryId,
                comment,
                amount,
                balanceAfter,
              }) => (
                <TableRow key={id}>
                  <TableBodyData>
                    {format(new Date(transactionDate), 'dd.MM.yyyy')}
                  </TableBodyData>
                  <ColoredData positive={amount > 0}>
                    {amount > 0 ? '+' : '-'}
                  </ColoredData>
                  <TableBodyData>{matchCategory(categoryId)}</TableBodyData>
                  <TableBodyData>{comment}</TableBodyData>
                  <ColoredData positive={amount > 0}>{amount}</ColoredData>
                  <TableBodyData>{balanceAfter}</TableBodyData>
                  <TableBodyData>
                    <IconButton
                      type="button"
                      disabled={isLoading}
                      onClick={() => dispatch(deleteTransaction(id))}
                    >
                      <MdOutlineDelete size={20} />
                    </IconButton>
                  </TableBodyData>
                </TableRow>
              )
            )}
          </tbody>
        </Table>
      )}
    </>
  );
}
