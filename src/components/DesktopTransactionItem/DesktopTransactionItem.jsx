import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';
import { MdOutlineDelete } from 'react-icons/md';
import {
  selectCategories,
  selectIsTransactionsLoading,
} from 'redux/transactions/selectors';
import { deleteTransaction } from 'redux/transactions/operations';
import { IconButton } from 'components';
import {
  TableRow,
  TableBodyData,
  ColoredData,
} from './DesktopTransactionItem.styled';

export default function DesktopTransactionItem({
  transaction: {
    id,
    transactionDate,
    amount,
    categoryId,
    comment,
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
        <TableRow>
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
      )}
    </>
  );
}
