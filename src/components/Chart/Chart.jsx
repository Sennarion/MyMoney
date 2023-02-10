import { useSelector } from 'react-redux';
import { selectPeriodTotal } from 'redux/transactions/selectors';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import dounatsData from 'utils/dounatsData';
import { CharWrapper, Balance, Number } from './Chart.styled';
import { formatCurrency } from 'utils/formatCurrency';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.overrides.doughnut.plugins = {
  ...ChartJS.overrides.doughnut.plugins,
  legend: {
    display: false,
  },
};

export default function Chart({ data }) {
  const balance = useSelector(selectPeriodTotal);
  const dounats = dounatsData(data);

  return (
    <CharWrapper>
      <Doughnut data={dounats} />
      <Balance>
        <Number negative={balance < 0}>₴ {formatCurrency(balance)}</Number>
      </Balance>
    </CharWrapper>
  );
}
