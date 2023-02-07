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

  useEffect(() => {
    dispatch(getFilteredTransactions({ month, year }));
  }, [dispatch]);

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getYear());
  const transaction = useSelector(selectFilteredTransactions);
  const income = useSelector(selectIncomeSummary);
  const expense = useSelector(selectExpenseSummary);  
  const years = allYears(); 
  return (
    <div>
      <h2>Statistics</h2>
      <div>
        {transaction.length > 0 && <Chart data={transaction} />}
        <div>
          <div>
            <Select options={years} value={ year} />
            <Select options={allMonth} value={month}/>
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
