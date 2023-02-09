import { getFilteredTransactions } from 'redux/transactions/operations';
import {
  selectFilteredTransactions,
  selectIncomeSummary,
  selectExpenseSummary,
} from 'redux/transactions/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import Chart from 'components/Chart/Chart';
import StatisticsTable from 'components/StaticticsTable/StaticticsTable';
import { allYears, allMonth } from 'utils/selectDate';
export default function Diagram() {
  const today = new Date();
  const dispatch = useDispatch();
  const transaction = useSelector(selectFilteredTransactions);
  const income = useSelector(selectIncomeSummary);

  const expense = useSelector(selectExpenseSummary);
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  useEffect(() => {    
    dispatch(getFilteredTransactions({ month, year }));
  }, [dispatch, year, month]);

  const years = allYears();
  const valueOfTodayMonth = allMonth.find(date => date.value === month);
  console.log(transaction);

  return (
    <div>
      <h2>Statistics</h2>
      <div>
        {transaction.length > 0 && <Chart data={transaction} />}
        <div>
          <div>
            <Select
              options={years}
              defaultValue={{ value: year, label: year }}
              onChange={data => setYear(Number(data.value))}
            />
            <Select
              options={allMonth}
              defaultValue={{
                value: valueOfTodayMonth.value,
                label: valueOfTodayMonth.label,
              }}
              onChange={({ value }) => setMonth(Number(value))}
            />
          </div>
          {transaction.length > 0 && (
            <StatisticsTable
              transaction={transaction}
              income={income}
              expense={expense}
            />
          )}
        </div>
      </div>
    </div>
  );
}
