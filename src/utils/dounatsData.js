import categoryColor from 'utils/categoryColors';
import { theme } from 'styles/theme';

export default function dounatsData(arr) {
  const incomeTransaction = arr.filter(trans => trans.type === 'EXPENSE');

  if (arr.length === 0 || incomeTransaction.length === 0) {
    return {
      datasets: [
        {
          data: [100],
          backgroundColor: [`${theme.colors.secondaryTextColor}`],
          borderWidth: 0,
          cutout: '70%',
        },
      ],
    };
  }

  const matchColor = name => categoryColor.find(el => el.name === name).color;

  const labels = incomeTransaction.map(category => category.name);
  const data = incomeTransaction.map(data => data.total);
  const backgroundColor = incomeTransaction.map(category =>
    matchColor(category.name)
  );

  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };
}
