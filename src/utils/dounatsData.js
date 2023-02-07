import categoryColor from 'data/data';

export default function dounatsData(arr) {
  const matchColor = name => categoryColor.find(el => el.name === name).color;

  const incomeTransaction = arr.filter(trans => trans.type === 'EXPENSE');
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
      },
    ],
  };
}
