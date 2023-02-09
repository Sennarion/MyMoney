import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/selectors';
import {
  Table,
  TableHead,
  TableHeadData,
} from './DesktopTransactionsTable.styled';
import DesktopTransactionItem from 'components/DesktopTransactionItem/DesktopTransactionItem';

export default function DesktopTransactionsTable() {
  const transactions = useSelector(selectTransactions);

  return (
    <>
      {transactions.length > 0 && (
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
            {transactions.map(transaction => (
              <DesktopTransactionItem
                transaction={transaction}
                key={transaction.id}
              />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
