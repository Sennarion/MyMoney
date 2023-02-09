import { getFilteredTransactions } from 'redux/transactions/operations';
import {
  selectFilteredTransactions,
  selectIncomeSummary,
  selectExpenseSummary,
} from 'redux/transactions/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Chart from 'components/Chart/Chart';
import StatisticsTable from 'components/StaticticsTable/StaticticsTable';
import { allYears, allMonth } from 'utils/selectDate';
import { Title, DiagramPage, DiagramWrapper, TableWrapper, SelectWrapper, } from './Diagram.styled';
import { selectStatisticStyles } from 'utils/selectStyles';
import Select from 'react-select';
export default function Diagram() {

  const today = new Date();

  const dispatch = useDispatch();

  const transaction = useSelector(selectFilteredTransactions);
  const income = useSelector(selectIncomeSummary);
  const expense = useSelector(selectExpenseSummary);

  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [isMonthSelectorOpen, setIsMonthSelectorOpen] = useState(false);
  const [isYearSelectorOpen, setIsYearSelectorOpen] = useState(false);

  useEffect(() => {
    dispatch(getFilteredTransactions({ month, year }));
  }, [dispatch, year, month]);

  const years = allYears();
  const valueOfTodayMonth = allMonth.find(date => date.value === month);

  return (
    <DiagramPage>
      <Title>Statistics</Title>
      <DiagramWrapper>
        {transaction.length > 0 && <Chart data={transaction} />}
        <TableWrapper>
          <SelectWrapper>
            <Select
              styles={selectStatisticStyles}
              options={years}
              defaultValue={{ value: year, label: year }}
              onChange={data => { 
                setIsYearSelectorOpen(true);
                setIsMonthSelectorOpen(false);
                setYear(Number(data.value))
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
                setIsMonthSelectorOpen(true);
                setIsYearSelectorOpen(false);
                setMonth(Number(value))
              }}
            />
          </SelectWrapper>
          {transaction.length > 0 && (
            <StatisticsTable
              transaction={transaction}
              income={income}
              expense={expense}
            />
          )}
        </TableWrapper>
      </DiagramWrapper>
    </DiagramPage>
  );
}
