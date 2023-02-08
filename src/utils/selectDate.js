export function allYears() {
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
export const allMonth = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];
