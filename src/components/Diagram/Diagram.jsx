import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { getFilteredTransactions } from 'redux/transactions/operations';
import {
  selectFilteredTransactions,
  selectIncomeSummary,
  selectExpenseSummary,
} from 'redux/transactions/selectors';
import { allYears, allMonth } from 'utils/selectDate';
import { selectStatisticStyles } from 'utils/selectStyles';
import { Chart, StatisticsTable } from 'components';
import {
  DiagramWrapper,
  TableWrapper,
  SelectWrapper,
  Message,
} from './Diagram.styled';

export default function Diagram() {
  const dispatch = useDispatch();

  const transaction = useSelector(selectFilteredTransactions);
  const income = useSelector(selectIncomeSummary);
  const expense = useSelector(selectExpenseSummary);

  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());

  useEffect(() => {
    dispatch(getFilteredTransactions({ month, year }));
  }, [dispatch, year, month]);

  const years = allYears();
  const valueOfTodayMonth = allMonth.find(date => date.value === month);

  return (
    <DiagramWrapper>
      <Chart data={transaction} />
      <TableWrapper>
        <SelectWrapper>
          <Select
            styles={selectStatisticStyles}
            options={years}
            defaultValue={{ value: year, label: year }}
            onChange={data => {
              setYear(Number(data.value));
            }}
          />
          <Select
            styles={selectStatisticStyles}
            options={allMonth}
            defaultValue={{
              value: valueOfTodayMonth.value,
              label: valueOfTodayMonth.label,
            }}
            onChange={({ value }) => {
              setMonth(Number(value));
            }}
          />
        </SelectWrapper>
        {transaction.length > 0 ? (
          <StatisticsTable
            transaction={transaction}
            income={income}
            expense={expense}
          />
        ) : (
          <Message>Sorry, there are no transactions for this period...</Message>
        )}
      </TableWrapper>
    </DiagramWrapper>
  );
}
