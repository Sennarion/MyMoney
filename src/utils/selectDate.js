export default function years() {
  const today = new Date();
  const thisYear = today.getFullYear();
  const years = [];
  for (let i = thisYear; i > thisYear - 5; i--) {
    years.push({
      value: i,
      label: i,
    });
  }
  return years;
}
