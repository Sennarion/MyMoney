import categoryColor from 'utils/categoryColors';
import { nanoid } from '@reduxjs/toolkit';

export default function tableData(arr) {
  return arr
    .filter(tr => tr.type === 'EXPENSE')
    .map(tr => {
      const total = (Math.round(tr.total * 100) / 100).toFixed(2);
      const color = categoryColor.find(el => el.name === tr.name).color;
      return { ...tr, color, total, id: nanoid() };
    });
}
