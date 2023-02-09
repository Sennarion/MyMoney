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
 const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  useEffect(() => {
    console.log('data is changed')
    console.log(month);
    console.log(year);
    dispatch(getFilteredTransactions({ month, year }));
  }, [dispatch, year, month]);

 
  const transaction = useSelector(selectFilteredTransactions);
  const income = useSelector(selectIncomeSummary);
  const expense = useSelector(selectExpenseSummary);  
  const years = allYears(); 
  const valueOfTodayMonth = allMonth.find(date => date.value === (month + 1));
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
              defaultValue={{ value:year, label: year }}
              onChange={(data) => setYear(data.value)} />
            <Select
              options={allMonth}
              defaultValue={{ value: valueOfTodayMonth.value, label: valueOfTodayMonth.label }}
              onChange={({value}) => setMonth(value-1)} />
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
