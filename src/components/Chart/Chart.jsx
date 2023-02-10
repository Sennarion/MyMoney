import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import BalanceNumber from 'components/BalanceNumber/BalanceNumber';
import dounatsData from 'utils/dounatsData';
import { CharWrapper, Balance } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.overrides.doughnut.plugins = {
  ...ChartJS.overrides.doughnut.plugins,
  legend: {
    display: false,
  },
};

export default function Chart({ data }) {
  const dounats = dounatsData(data);

  return (
    <CharWrapper>
      <Doughnut data={dounats} />
      <Balance>
        <BalanceNumber />
      </Balance>
    </CharWrapper>
  );
}
